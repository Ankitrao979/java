import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './plans/plans.component';
import { WalletComponent } from './wallet/wallet.component';
import { QuickPayComponent } from './quick-pay/quick-pay.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuickPay2Component } from './quick-pay-2/quick-pay-2.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { AlertComponent } from './shared/components/alert/alert.component';
import { SharedComponentsModule } from './shared/components/shared-components.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PlansComponent,
    WalletComponent,
    QuickPayComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProfileComponent,
    SignUpComponent,
    SignInComponent,
    QuickPay2Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    RouterModule.forRoot([
      { path : '', component : HomeComponent },
      { path : 'home', component : HomeComponent },
      { path : 'footer', component : FooterComponent },
      { path : 'plans', component : PlansComponent },
      { path : 'wallet', component : WalletComponent },
      { path : 'profile', component : ProfileComponent },
      { path : 'quick-pay', component : QuickPayComponent },
      { path : 'quick-pay-2', component : QuickPay2Component },
      { path : 'contact-us', component : ContactUsComponent },
      { path : 'about-us', component : AboutUsComponent },
      { path : 'sign-in', component : SignInComponent},
      { path : 'sign-up', component : SignUpComponent},
      { path : '**', component : HomeComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
