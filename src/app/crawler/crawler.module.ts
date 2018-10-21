import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { ViewComponent } from './pages/view/view.component';
import { CrawlerRoutingModule } from './crawler-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CrawlerRoutingModule
  ],
  declarations: [ListComponent, ViewComponent]
})
export class CrawlerModule { }
