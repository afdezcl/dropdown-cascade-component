import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import { ProvinceI, CityI } from '../../models/cities.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [CitiesService]
})
export class DropdownComponent implements OnInit {

  public selectedProvince: ProvinceI = { id: 0, name: '' };
  public provinces: ProvinceI[];
  public cities: CityI[];

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.provinces = this.citiesService.getProvinces();
  }

  onChange(id: number): void {    
    this.cities = this.citiesService.getCities().filter(item => item.provinceId == id);    
  }

}
