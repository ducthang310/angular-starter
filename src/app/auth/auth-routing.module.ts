import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../core/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { ResetComponent } from './pages/reset/reset.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'reset-password/:token',
    component: ResetComponent,
    // canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
