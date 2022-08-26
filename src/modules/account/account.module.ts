import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import config from 'src/config'
import { AccountController } from './account.controller'
import { AccountService } from './account.service'

@Module({
  imports: [
    JwtModule.register({
      secret: config.jwt.secret,
      signOptions: { expiresIn: config.jwt.expire },
    }),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(UserMiddleware)
  //     .forRoutes('account')
  // }
}
