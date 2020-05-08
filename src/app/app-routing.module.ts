import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './page/error/error.component'
import { HomeComponent } from './page/home/home.component'
import { LoginComponent } from './page/login/login.component'
import { RegisterComponent } from './page/register/register.component'
import { TermsComponent } from './page/terms/terms.component'
import { UserComponent } from './page/user/user.component'

const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full'
  },
  { path: 'recipe/:id', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'register', component: RegisterComponent
  },
  { path: 'account', component: UserComponent },
  { path: 'register/terms', component: TermsComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
