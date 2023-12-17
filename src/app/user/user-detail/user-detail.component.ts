import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user !: User;
  id !: number;

  constructor(private userService : UserService, private route : ActivatedRoute)
  {
     this.route.params.subscribe( (params : Params)=> {
        this.id = params['id'];
        console.log(this.id);
     });

     this.userService.getUserById(this.id).then((user : User) => {
      this.user = user;
      console.log(user);
     });
  }

}
