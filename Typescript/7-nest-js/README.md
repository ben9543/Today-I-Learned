# Nest JS

## 0. Overview

- `@Module`
- `@Controller`
- `@Injectable`
- Pipe & Guards are associated with `@Injectable()` decorator

## 1. Controllers

- Accessing express req & res object is not recommended, decorators for each object items are provided by Nest JS by default.

- For example: @Header(), @Redirect(), @Param(), @Body() ... etc

### > Handling `asnyc` in Nest JS


## 2. Providers

- Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on

- The main idea of a provider is that it can be injected as dependency

## 3. Modules

- When we import a module from another module, we import `module.ts` file(more specifically class with the decorator `@Module`
- Then we can access to the module's service(provider). We manually import `service.ts` file(a class with `@Injectable` and make it available through constructor)
- `imports`: Let us use other modules' exported modules in the current module.
- `providers`: Let us use services(classes defined with `@Injectable`)in the same directory.


## 4. Authentication


### LocalStrategy

- `AuthService(/auth.service.ts)`: Has `validateUser()` which is the logic to whether determine the given credentials are valid or not. For this, it is recommended to import and use UserModule.
- `LocalStrategy(/auth.local.strategy)`: Extends PassportStrategy(<local-strategy-package>). `validate()` needs to be configured. It is a good practice to use AuthService's `validateUser()` function.
- Passport will call the `verify()` (implemented with the `validate()` method in @nestjs/passport). For the local-strategy, Passport expects a validate() method with the following signature: validate(username: string, password:string): any

### JwtStrategy

- Instead of simply returning `req.user`, the goal in this method is to return an access_token if the credentials were all valid. Since then, until the token gets expired, clients are going to use the token to access to the server instead of keep typing credentials.
- In LocalStrategy, we did just called `super()` in the constructor. But in JwtStrategy, we need to provide several options such as `secretOrKey` and `jwtFromRequest` to the `super()`.
- Don't forget to implement validate function.

    1. The jwt-strategy, Passport first verifies the JWT's signature and decodes the JSON.
    2. It then invokes our `validate()` method passing the decoded JSON as its single parameter.
    3. Based on the way JWT signing works, we're guaranteed that we're receiving a valid token that we have previously signed and issued to a valid user.
    4. As a result of all this, our response to the `validate()` callback is trivial: we simply return an object containing the userId and username properties.

- With JWT startegy with passport, we don't even need to check jwt token manually. Implemented functions will do all the jobs.
- All we have to do is give the options and set `req.user` shape by manipulating `validate()`

### Code implementation

- Passport.js

```js
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));
```

- @nest/passport

```ts
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './my-constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
```
