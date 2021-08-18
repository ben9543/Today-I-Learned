# Features

- Middlewares, pipes, and guards are classes with an `@Injectable()` decorator.
- Middlewares implement `NestMiddleware` interface.
- Pipes implement `PipeTransform` interface.
- Guards implement `CanActivate` interface.

# Experiment

## 1. Which one gets fired first - Middleware vs Guard vs Interceptor

- Middleware  -> Guard -> Interceptor
- Middleware and Guard are classes simply logs "From Middleware" & "From Guard".
- Setting up Guard to App controller.

```ts
@Controller()
@UseInterceptors(new ValidationInterceptor())
@UseGuards(new ValidationGuard())
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
```

- Setting up middleware to App module

```ts
@Module({
  imports: [EventsGateway],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidationMiddleware)
      .forRoutes(AppController)
  }
}
```

- Setting up Guard

```ts
@Injectable()
export class ValidationGuard implements CanActivate {
    canActivate(
        context: ExecutionContext
    ):boolean | Promise<boolean> | Observable<boolean>{
        const request = context.switchToHttp().getRequest();
        console.log("From Guard");
        return validate(request);
    }
}
```

- Setting up Interceptor

```ts
@Injectable()
export class ValidationInterceptor implements NestInterceptor {
    intercept(ctx: ExecutionContext, next: CallHandler): Observable<any>{
        console.log("From Interceptor");
        return next.handle();
    }
};
```

- Log result

```
> From Middleware
  From Guard
  From Interceptor
```
