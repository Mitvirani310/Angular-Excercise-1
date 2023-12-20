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
  
  constructor(private CityService : CityService) {
      this.CityService.getAllCities().then((UserList: City[]) => {
          this.CityList = UserList;
          console.log(this.CityList);
        });
  }

  resetUpdatedTimes(city: City) {
    city.updatedCityTimes = 0;

    this.CityService.resetUpdatedTimes(city.id).then(() => {
      console.log(`UpdatedCityTimes reset for city with id ${city.id}`);
    }).catch((error) => {
      console.error(error);
    });
  }

}
