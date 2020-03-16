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
  public provinces: ProvinceI[];
  public cities: CityI[];  

  constructor(private _citiesService: CitiesService) { }

  ngOnInit() {
    this._citiesService.getProvinces().subscribe(
      data => {
        console.log(data);
        this.provinces = data;
      }
    );
      
  }

  onChange(id: string): void {    
    this._citiesService.getCities().subscribe(data => {
      //console.log(data);
      this.cities = data.filter(item => item.provinceId === id);      
      console.log(this.cities);
    
    });

    //this.cities = this._citiesService.getCities().filter(item => item.provinceId === id);

  }

}
