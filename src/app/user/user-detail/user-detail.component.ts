import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  user !: User;
  id !: number;

  @ViewChild('myForm') form!: NgForm;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
        city: this.user.city,
      });
    });
  }

  OnSubmit() {
    if (this.form.dirty) {
      const updatedUser: User = {
        id: this.form.value.userid,
        username: this.form.value.username,
        email: this.form.value.useremail,
        first_name: this.form.value.f_name,
        last_name: this.form.value.l_name,
        birthdate: this.form.value.date_of_birth,
        city: this.form.value.city,
        updatedUserTimes: ++this.user.updatedUserTimes,
      };
      console.log(updatedUser);
      this.userService.updateUser(updatedUser).then(() => {
        console.log('City data updated successfully!');
      });
    } else {
      console.log('Form is invalid. Please check the fields.');     
    }
    this.router.navigate(['/users']);
  }
  goBack() {
    this.router.navigate(['/users']);
  }
}
