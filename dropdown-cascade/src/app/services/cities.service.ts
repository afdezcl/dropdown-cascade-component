import { Injectable } from '@angular/core';
import { ProvinceI, CityI } from '../models/cities.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private urlProvinces = 'https://raw.githubusercontent.com/afdezcl/dropdown-cascade-component/master/data/provinces.json';
  private urlCities = 'https://raw.githubusercontent.com/afdezcl/dropdown-cascade-component/master/data/cities.json';
  
  constructor(private _http: HttpClient) { }

  getProvinces(): Observable<ProvinceI[]>{    
    return this._http.get<ProvinceI[]>(this.urlProvinces);
  }

  getCities(): Observable<CityI[]>{
    return this._http.get<CityI[]>(this.urlCities);
  }

}
