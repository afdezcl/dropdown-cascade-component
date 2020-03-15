import { Injectable } from '@angular/core';
import { ProvinceI, CityI } from '../models/cities.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private urlProvinces = 'assets/provinces.json';

  constructor(private _http: HttpClient) { }

  getProvinces(){    
    return this._http.get<ProvinceI>(this.urlProvinces);
  }
/*
  getCities(): CityI[]{
    return this.cities;
  }
*/
}
