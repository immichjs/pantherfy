import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserAuthenticated } from 'src/common/decorators/user.decorator';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller()
@UseGuards(JwtAuthGuard)
export class UserController {
	@Inject() private readonly _userService: UserService;

	@Get('me')
	@Roles(Role.Admin)
	public async me(
		@UserAuthenticated('sub') id: string,
	): Promise<Omit<User, 'password'>> {
		return this._userService.findById(id);
	}
}
