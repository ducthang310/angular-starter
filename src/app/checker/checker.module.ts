import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherComponent } from './pages/other/other.component';
import { WebsitesComponent } from './pages/websites/websites.component';
import { CheckerRoutingModule } from './checker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CheckerRoutingModule
  ],
  declarations: [WebsitesComponent, OtherComponent, WebsitesComponent]
})
export class CheckerModule { }
