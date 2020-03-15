import { Component, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';
import {ProvinceI, CityI} from '../../models/cities.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [CitiesService]
})
export class DropdownComponent implements OnInit {

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    console.log(this.citiesService.getProvinces());
    console.log(this.citiesService.getCities());
  }

}
