import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './buttons/log-in/log-in.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SignUpComponent } from './buttons/sign-up/sign-up.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { BackComponent } from './buttons/back/back.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { DialogComponent } from './components/dialog/dialog.component';

const routes: Routes = [
  { path:'login-page', component: LoginPageComponent},
  { path:'signup-page', component: SignupPageComponent},
  { path:'success-page', component: SuccessPageComponent},
  { path:'inventory-page', component: InventoryPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent,
                                  LoginPageComponent,
                                  SignupPageComponent,
                                  SuccessPageComponent,
                                  InventoryPageComponent,
                                  DialogComponent,
                                  SignUpComponent,
                                  LogInComponent,
                                  BackComponent]