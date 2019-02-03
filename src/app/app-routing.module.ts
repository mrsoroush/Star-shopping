import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CalculationComponent } from './components/calculation/calculation.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { AccountsComponent } from './components/users/accounts/accounts.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';
import { AuthGuard } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { PracticeComponent } from './components/practice/practice.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculation', component: CalculationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', canActivate: [AuthGuard], component: PanelComponent, children: [
    { path: ':id', component: AccountsComponent },
    { path: ':id/edit', canDeactivate: [CanDeactivateGuard] ,component: EditUsersComponent },
  ]},
  { path: 'practice', component: PracticeComponent },
  { path: 'not-found', component: Notfound404Component },
  { path: '**' , redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
