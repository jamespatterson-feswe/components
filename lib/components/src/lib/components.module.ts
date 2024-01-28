import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { FooterComponent, SaleBannerComponent } from '../public-api';



@NgModule({
  declarations: [
    ComponentsComponent,
    FooterComponent,
    SaleBannerComponent
  ],
  imports: [],
  exports: [
    ComponentsComponent,
    FooterComponent,
    SaleBannerComponent
  ]
})
export class ComponentsModule { }
