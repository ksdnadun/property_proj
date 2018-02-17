import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPropertyComponent } from './search-property/search-property.component';
import {AgmCoreModule} from '@agm/core';
import { SearchMapComponent } from './search-map/search-map.component';
import {shallowEqualArrays} from '@angular/router/src/utils/collection';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCZliFoDs1ab_HzAdrnjaE2JcIvW4iROUI'
    })
  ],
  declarations: [SearchPropertyComponent, SearchMapComponent],
  exports: [ SearchMapComponent ]
})
export class PropertyModule { }
