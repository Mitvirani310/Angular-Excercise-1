import { Component } from '@angular/core';
import { City } from '../Models/city';
import { CityService } from '../Services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {

  CityList: City[] = [];
  // UserService: UserService = inject(UserService);
  
  constructor(private CityService : CityService) {
      this.CityService.getAllCities().then((UserList: City[]) => {
          this.CityList = UserList;
          console.log(this.CityList);
        });
  }

}
