import { Injectable } from '@angular/core';
import { ProvinceI, CityI } from '../models/cities.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private urlProvinces = 'https://raw.githubusercontent.com/afdezcl/dropdown-cascade-component/master/data/provinces2.json?token=AEKUIDLWC27SRRWHHMAU3OK6O73FG';
  private urlCities = 'https://raw.githubusercontent.com/afdezcl/dropdown-cascade-component/master/data/cities.json?token=AEKUIDOGFAQX2HE6LIMZVCK6O74EA';
  
  constructor(private _http: HttpClient) { }

  getProvinces(): Observable<ProvinceI[]>{    
    return this._http.get<ProvinceI[]>(this.urlProvinces);
  }

  getCities(): Observable<CityI[]>{
    return this._http.get<CityI[]>(this.urlCities);
  }

}
