import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

import { ConfigService } from '../../shared/services/config.service';
import { UserService } from '../user/user.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        public readonly configService: ConfigService,
        public readonly userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //secretOrKey: configService.get('JWT_SECRET_KEY'),
            secretOrKey: {
                key: fs.readFileSync(path.resolve('Keys/jwtRS256.key.pub'), 'utf8').replace(/\\n/gm, '\n')
            },
            algorithms: ['RS256'],
        });
    }

    async validate({ iat, exp, id: userId }) {
        const timeDiff = exp - iat;
        if (timeDiff <= 0) {
            throw new UnauthorizedException();
        }
        const user = await this.userService.findOne(userId);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
