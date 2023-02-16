import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Admin } from 'src/admin/entities/admin.entity';

export const GetAdmin = createParamDecorator(
  (_data, ctx: ExecutionContext): Admin => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
