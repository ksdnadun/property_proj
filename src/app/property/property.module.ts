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

@NgModule({
  imports: [

    NgbModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZliFoDs1ab_HzAdrnjaE2JcIvW4iROUI'
    }),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule
  ],
  declarations: [SearchPropertyComponent, SearchMapComponent],
  exports: [ SearchMapComponent, MatSliderModule, MatSelectModule, MatAutocompleteModule ]
})
export class PropertyModule { }
