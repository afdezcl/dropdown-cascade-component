import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { ProvinceI, CityI } from '../../models/cities.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [CitiesService]
})
export class DropdownComponent implements OnInit {

  public selectedProvince: ProvinceI = { id: '0', name: '' };
  public provinces: Observable<ProvinceI>;
  public cities: CityI[];

  constructor(private _citiesService: CitiesService) { }

  ngOnInit() {
    this.provinces = this._citiesService.getProvinces();
    console.log("Hola : " + this.provinces); 
  }

  onChange(id: number): void {    
   // this.cities = this.citiesService.getCities().filter(item => item.provinceId == id);    
  }

}
