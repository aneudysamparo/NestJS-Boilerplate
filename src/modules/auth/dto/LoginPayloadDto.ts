'use strict';

import { TokenPayloadDto } from './TokenPayloadDto';
import { UserDto } from '../../user/dto/UserDto';
import { ApiProperty } from '@nestjs/swagger';

export class LoginPayloadDto {
    @ApiProperty({ type: UserDto })
    user: UserDto;
    @ApiProperty({ type: TokenPayloadDto })
    token: TokenPayloadDto;

    constructor(user: UserDto, token: TokenPayloadDto) {
        this.user = user;
        this.token = token;
    }
}
