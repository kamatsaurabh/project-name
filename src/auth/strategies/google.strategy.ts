import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(configService: ConfigService) {
    super({
      clientID: '1052149523397-o5o0nn1gj9m9le52189q68geqo73veoi.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/callback',
      scope: ['email', 'profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) {
    done(null, profile);
  }
}
