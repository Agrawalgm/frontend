import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';  // <<<< import it here
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarHomeComponent} from './navbar-home/navbar-home.component'
import { FrontpageComponent } from './frontpage/frontpage.component';
import {EmiCalculatorComponent} from './calculators/emi-calculator/emi-calculator.component'
import {EligibilityCalculatorComponent} from './calculators/eligibility-calculator/eligibility-calculator.component'
import { AdminloginComponent } from './Login/adminlogin/adminlogin.component';
import { UserloginComponent } from './Login/userlogin/userlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SalariedComponent } from './salaried/salaried.component';
import { SelfemployedComponent } from './selfemployed/selfemployed.component';
import { PropertyComponent } from './property/property.component';
import { TypesalComponent } from './typesal/typesal.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatMenuModule} from "@angular/material/menu";
import { FaqComponent } from './faq/faq.component';
import { DocumentComponent } from './document/document.component'


@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
  NavbarHomeComponent,
  EmiCalculatorComponent,
  EligibilityCalculatorComponent,
  AdmindashboardComponent,
  AdminloginComponent,
  UserloginComponent,
  AboutusComponent,
  RegisterUserComponent,
  SalariedComponent,
  SelfemployedComponent,
  PropertyComponent,
  TypesalComponent,
  LoanApplicationComponent,
  UserdashboardComponent,
  FaqComponent,
  DocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
