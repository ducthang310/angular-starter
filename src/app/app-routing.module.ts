import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { IndexComponent } from './layout/index/index.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
  {
    path: '',
    component: IndexComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'checker',
        loadChildren: 'src/app/checker/checker.module#CheckerModule'
      },
      {
        path: 'crawler',
        loadChildren: 'src/app/crawler/crawler.module#CrawlerModule'
      },
      {
        path: 'backup',
        loadChildren: 'src/app/backup/backup.module#BackupModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
