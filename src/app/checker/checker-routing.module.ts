import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { OtherComponent } from './pages/other/other.component';
import { WebsitesComponent } from './pages/websites/websites.component';

const routes: Routes = [
  {
    path: 'websites',
    component: WebsitesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'other',
    component: OtherComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckerRoutingModule { }
