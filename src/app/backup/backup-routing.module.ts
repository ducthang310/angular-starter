import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabasesComponent } from './pages/databases/databases.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: 'databases',
    component: DatabasesComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackupRoutingModule { }
