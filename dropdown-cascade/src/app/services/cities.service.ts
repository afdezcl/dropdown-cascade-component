import { Injectable } from '@angular/core';
import {ProvinceI, CityI} from '../models/cities.interface';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private provinces: ProvinceI[] = [
    {
      id: 1,
      name: 'Málaga'
    },
    {
      id: 2,
      name: 'Sevilla'
    },
    {
      id: 3,
      name: 'Granada'
    },
    {
      id: 4,
      name: 'Madrid'
    }
  ]
  private cities: CityI[] = [
    {
      id: 1,
      provinceId: 1,
      name: 'Antequera'
    },
    {
      id: 2,
      provinceId: 1,
      name: 'Fuengirola'
    },
    {
      id: 3,
      provinceId: 2,
      name: 'Écija'
    },
    {
      id: 4,
      provinceId: 2,
      name: 'Osuna'
    },
    {
      id: 5,
      provinceId: 3,
      name: 'Loja'
    },    
    {
      id: 6,
      provinceId: 3,
      name: 'Almilla'
    },
    {
      id: 7,
      provinceId: 4,
      name: 'Alcorcón'
    },
    {
      id: 8,
      provinceId: 4,
      name: 'Fuenlabrada'
    }

  ]

  constructor() { }

  getProvinces(): ProvinceI[] {
   return this.provinces;
  }

  getCities(): CityI[]{
    return this.cities;
  }

}
