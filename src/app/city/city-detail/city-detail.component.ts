import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from 'src/app/Models/city';
import { CityService } from 'src/app/Services/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent {

  city !: City;
  id !: number;

  constructor(private cityService : CityService, private route : ActivatedRoute)
  {
     this.route.params.subscribe( (params : Params)=> {
        this.id = params['id'];
        console.log(this.id);
     });

     this.cityService.getCityById(this.id).then((city : City) => {
      this.city = city;
      console.log(city);
     });
  }

}
