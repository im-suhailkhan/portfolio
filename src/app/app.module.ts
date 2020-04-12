import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var config = {
  apiKey: "AIzaSyDOrd8B56c1Vfmil3kWVubXR_haJK-C2yw",
  authDomain: "porfolio-d37cd.firebaseapp.com",
  databaseURL: "https://porfolio-d37cd.firebaseio.com",
  projectId: "porfolio-d37cd",
  storageBucket: "porfolio-d37cd.appspot.com",
  messagingSenderId: "317564799490",
  appId: "1:317564799490:web:d92a143f27981186bc751b"
 };



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [BrowserModule,AppRoutingModule,AdminModule,AngularFireModule.initializeApp(config),AngularFireAuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
