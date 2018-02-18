import { Component, OnInit } from '@angular/core';
import 'hammerjs';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 6.8018027;
  lng: number = 79.92268409999997;
  searchIconUrl: string = "https://www.iconfinder.com/icons/452864/building_explore_find_home_house_real_estate_realty_search_icon"

  searchParameters = [
    {value: 'Bare Lands', viewValue: 'bareLands'},
    {value: 'Houses', viewValue: 'houses'},
    {value: 'For Rent', viewValue: 'forRent'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
