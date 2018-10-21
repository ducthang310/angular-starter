import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabasesComponent } from './pages/databases/databases.component';
import { OtherComponent } from './pages/other/other.component';
import { BackupRoutingModule } from './backup-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BackupRoutingModule
  ],
  declarations: [DatabasesComponent, OtherComponent]
})
export class BackupModule { }
