import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CalculationComponent } from './components/calculation/calculation.component';
import { RedColorDirective } from './directives/red-color.directive';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { PanelComponent } from './components/panel/panel.component';
import { AccountsComponent } from './components/users/accounts/accounts.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';
import { AuthGuard } from './services/auth-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate-guard.service';
import { PracticeComponent } from './components/practice/practice.component';
import { SubjectService } from './services/subject.service';
import { AddCustomersComponent } from './components/users/add-customers/add-customers.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CalculationComponent,
    RedColorDirective,
    LoginComponent,
    PanelComponent,
    AccountsComponent,
    EditUsersComponent,
    Notfound404Component,
    PracticeComponent,
    AddCustomersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    AuthGuard,
    CanDeactivateGuard,
    SubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
