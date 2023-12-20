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
    constructor(private UserService : UserService) {
        this.UserService.getAllUsers().then((UserList: User[]) => {
            this.UserList = UserList;
            console.log(this.UserList);
          });
    }

    resetUpdatedTimes(user: User) {
      user.updatedUserTimes = 0;
  
      this.UserService.resetUpdatedTimes(user.id).then(() => {
        console.log(`UpdatedCityTimes reset for city with id ${user.id}`);
      }).catch((error) => {
        console.error(error);
      });
    }
}
