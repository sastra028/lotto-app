import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent} from './main/main.component';
import { LoginComponent} from './login/login.component';
import {SidenavComponent} from './navigation/sidenav/sidenav.component';
const routes: Routes = [
  // {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: 'login', component: LoginComponent},
  // {
  //   path: 'page', component: SidenavComponent, children: [
  //     {path: '', redirectTo: 'main', pathMatch: 'full'},
  //     {path: 'main', component: MainComponent},
  //   ]
  // }
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
