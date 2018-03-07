import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import 'hammerjs';
import {MapsAPILoader} from '@agm/core';
import {FormControl} from '@angular/forms';
import {} from '@types/googlemaps';
import {SearchService} from '../search.service';
import {Property} from '../Property';
//import { } from 'googlemaps';


@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {


  @ViewChild('search')
  public searchElementRef: ElementRef;

  @ViewChild('slider')
  private distanceSlider: ElementRef;

  public searchControl: FormControl;
  public zoom: number;

  lat: number = 6.8018027;
  lng: number = 79.92268409999997;
  distanceRadius: number ;

  searchParameters = [
    {value: 'Bare Lands', viewValue: 'bareLands'},
    {value: 'Houses', viewValue: 'houses'},
    {value: 'For Rent', viewValue: 'forRent'}
  ];

  options = [];

  searchData: Property[];

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  changeCircle(element) {

    this.distanceRadius =  1000;//this.distanceSlider.displayValue * 500;

    this.searchService.getLocationSearchData(this.distanceRadius, this.lat, this.lng);


  }

}
