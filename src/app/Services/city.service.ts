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
  
  async getCityById(id: number = 0): Promise<City> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async updateCity(updatedCity: City): Promise<void> {
    const response = await fetch(`${this.url}/${updatedCity.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCity),
    });

    if (!response.ok) {
      throw new Error(`Failed to update city with id ${updatedCity.id}`);
    }
  }

  async resetUpdatedTimes(cityId: number): Promise<void> {
    const response = await fetch(`${this.url}/${cityId}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ updatedCityTimes: 0 }), 
    });

    if (!response.ok) {
      throw new Error(`Failed to reset updatedCityTimes for city with id ${cityId}`);
    }
  }

}
