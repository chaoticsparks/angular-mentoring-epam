import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
    AuthPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginPageComponent,
    AuthPanelComponent
  ]
})
export class AuthModule {
}
