import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Client } from 'src/client/entities/client.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): Client => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
