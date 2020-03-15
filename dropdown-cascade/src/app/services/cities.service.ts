import { Injectable } from '@angular/core';
import { ProvinceI, CityI } from '../models/cities.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private urlProvinces = 'https://drive.google.com/open?id=1YmutenGF_YKubJEbuNhAGQSfVS4wrvg-';

  constructor(private _http: HttpClient) { }

  getProvinces(): Observable<ProvinceI> {
    console.log(this._http.get<ProvinceI>(this.urlProvinces).pipe(map(results => results['Provinces'])));
    
   return this._http.get<ProvinceI>(this.urlProvinces).pipe(map(results => results['Provinces']));
  }
/*
  getCities(): CityI[]{
    return this.cities;
  }
*/
}
