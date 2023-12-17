import { Injectable } from '@angular/core';
import { City } from '../Models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }
 
  url = 'http://localhost:3000/cities';

  async getAllCities(): Promise<City[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCityById(id :number=0) : Promise<City> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

}
