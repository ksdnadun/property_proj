import { Injectable } from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {HttpClient} from '@angular/common/http';
import {Property} from './Property';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  serviceUrl: string = 'https://mt6bubnul5.execute-api.us-east-1.amazonaws.com/dev/property';

  searchResult: string;

  getLocationSearchData(radius, lat, lan) {

    this.http.get<string>(this.serviceUrl + '?radius=' + radius + '&lat=' + lat + '&lan=' + lan)
      .subscribe(data => {
        this.searchResult = data;
        //console.log(this.searchResult);
        //console.log(this.searchResult[0].location);
      });

    //console.log(this.searchResult);
    //this.searchResult.replace('[', '').replace(']', '');

    console.log(JSON.parse(this.searchResult));
    //console.log(JSON.parse(this.searchResult));
    ///const propertyList: Property[] = null;
    //Object.assign(propertyList, jsonResult);
    //console.log(propertyList[0]);


    //return jsonResult;
    return this.searchResult;
    // return this.http.get(this.serviceUrl + '?radius=' + radius + '&lat=' + lat + '&lan=' + lan);

  }

}
