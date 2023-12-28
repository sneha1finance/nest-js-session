import {Controller , Get} from  '@nestjs/common'
import { UserService } from './user.service';

@Controller()
    export class UserController{
        constructor(private readonly userservice: UserService){}

        @Get()
        getUsers():string{
            return this.userservice.getUsers();
        }
    }