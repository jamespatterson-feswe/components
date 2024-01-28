import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';



@NgModule({
  declarations: [
    ComponentsComponent
  ],
  imports: [
    ComponentsRoutingModule
  ],
  exports: [
    ComponentsComponent
  ]
})
export class ComponentsModule { }
