import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];
// {
//   path: 'aims', component: HomeComponent, children: [
//     // { path: '', component: DashboardComponent },
//     // { path: 'user', loadChildren: () => import('./user/user.module').then((user) => user.UserModule) },
//   ]
// },

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
