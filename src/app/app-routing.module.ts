import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FrontpageComponent} from './frontpage/frontpage.component'
import {EmiCalculatorComponent} from './calculators/emi-calculator/emi-calculator.component'
import {EligibilityCalculatorComponent} from './calculators/eligibility-calculator/eligibility-calculator.component'
import {FaqComponent} from'./faq/faq.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LoanApplicationComponent } from './loan-application/loan-application.component';
import { AdminloginComponent } from './Login/adminlogin/adminlogin.component';
import { UserloginComponent } from './Login/userlogin/userlogin.component';
import { PropertyComponent } from './property/property.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SalariedComponent } from './salaried/salaried.component';
import { SelfemployedComponent } from './selfemployed/selfemployed.component';
import { TypesalComponent } from './typesal/typesal.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { DocumentComponent } from './document/document.component'




const routes: Routes = [
  {path:'',redirectTo:"frontpage", pathMatch:'full'},  
  {path:'frontpage',component:FrontpageComponent},
  {path:'emicalc',component:EmiCalculatorComponent},
  {path:'elicalc',component:EligibilityCalculatorComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'userreg',component:RegisterUserComponent},
  {path:'typesal',component:TypesalComponent},
  {path:'salaried',component:SalariedComponent},
  {path:'selfemployed',component:SelfemployedComponent},
  {path:'property',component:PropertyComponent},
  {path:'loanapplication',component:LoanApplicationComponent},
  {path:'userdashboard',component:UserdashboardComponent},
  {path:'faq',component:FaqComponent},
  {path:'documents',component:DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
