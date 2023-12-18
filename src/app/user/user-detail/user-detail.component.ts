import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  @ViewChild('myForm') form!: NgForm;
  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.userService.getUserById(this.id).then((user: User) => {
      this.user = user;
      console.log(user);

      this.form.setValue({
        userid: this.user.id,
        username: this.user.username,
        useremail: this.user.email,
        f_name: this.user.first_name,
        l_name: this.user.last_name,
        date_of_birth: this.user.birthdate,
        city: this.user.city
      })
    });
  }

  OnSubmit() {

  }

}
