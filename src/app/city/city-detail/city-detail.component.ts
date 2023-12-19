import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { City } from 'src/app/Models/city';
import { CityService } from 'src/app/Services/city.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
})
export class CityDetailComponent {
  city!: City;
  cId!: number;

  @ViewChild('myForm') form!: NgForm;

  constructor(private cityService: CityService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((params: Params) => {
      this.cId = params['id'];
    });

    this.cityService.getCityById(this.cId).then((city: City) => {
      this.city = city;

      this.form.setValue({
        cityid: this.city.id,
        cname: this.city.name,
        countryname: this.city.country,
        population: this.city.population,
        state: this.city.state
      });
    });
  }

  OnSubmit() {
    if (this.form.dirty) {
      const updatedCity: City = {
        id: this.form.value.cityid,
        name: this.form.value.cname,
        country:this.form.value.countryname,
        population: this.form.value.population,
        state: this.form.value.state,
        updatedCityTimes:++this.city.updatedCityTimes
      };
      console.log(updatedCity)
      this.cityService.updateCity(updatedCity).then(() => {
        console.log('City data updated successfully!');
      });
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
      this.router.navigate(['/cities']);
  }

  goBack() {
    this.router.navigate(['/cities']);
  }
}
