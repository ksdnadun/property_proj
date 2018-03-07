import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPropertyComponent } from './search-property/search-property.component';
import {AgmCoreModule} from '@agm/core';
import { SearchMapComponent } from './search-map/search-map.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSliderModule} from '@angular/material/slider';
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './search.service';

@NgModule({
  imports: [

    NgbModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZliFoDs1ab_HzAdrnjaE2JcIvW4iROUI',
      libraries: ['places']
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [SearchPropertyComponent, SearchMapComponent],
  providers: [SearchService],
  exports: [ SearchMapComponent, MatSliderModule, MatSelectModule, MatAutocompleteModule, SharedModule, SearchPropertyComponent, HttpClientModule ]
})
export class PropertyModule { }
