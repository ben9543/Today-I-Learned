# Features

- Middlewares, pipes, and guards are classes with an `@Injectable()` decorator.
- Middlewares implement `NestMiddleware` interface.
- Pipes implement `PipeTransform` interface.
- Guards implement `CanActivate` interface.

# Experiment

## 1. Which one gets fired first - Middleware vs Guard

- Middleware executed first and then Guard executed.
- Middleware and Guard are classes simply logs "From Middleware" & "From Guard".
- Setting up Guard to App controller.

```ts
@Controller()
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

- Log result

```
> From Middleware
  From Guard
```
