import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { Algorithm } from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            useFactory: async () => ({
                privateKey: {
                    key: fs
                        .readFileSync(path.resolve('Keys/jwtRS256.key'), 'utf8')
                        .replace(/\\n/gm, '\n'),
                    passphrase: '',
                },
                signOptions: {
                    expiresIn: 3600,
                    algorithm: 'RS256' as Algorithm,
                },
            }),
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    exports: [PassportModule.register({ defaultStrategy: 'jwt' }), AuthService],
})
export class AuthModule {}
