import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DataComponent } from './data/data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import { SubscribeComponent } from './subscribe/subscribe.component';
import { ContentComponent } from './content/content.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { UserListeComponent } from './user-liste/user-liste.component';
import { LoginComponent } from './subscribe/login/login.component';
import { RegisterComponent } from './subscribe/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DataComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent,
    SubscribeComponent,
    WelcomepageComponent,
    UserListeComponent,
    LoginComponent,
    RegisterComponent,
    DetailProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
