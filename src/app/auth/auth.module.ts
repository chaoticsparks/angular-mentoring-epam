import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page/login-page.component';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './token-interceptor';

@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPageComponent,
    AuthPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginPageComponent,
    AuthPanelComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class AuthModule {
}
