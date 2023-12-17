import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  
})
export class UserComponent {

  UserList: User[] = [];
    // UserService: UserService = inject(UserService);
    
    constructor(private UserService : UserService) {
        this.UserService.getAllUsers().then((UserList: User[]) => {
            this.UserList = UserList;
            console.log(this.UserList);
          });
    }
}
