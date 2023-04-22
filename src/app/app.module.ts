import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HistoryComponent } from './pages/history/history.component';
import { HistorypageComponent } from './pages/historypage/historypage.component';
import { Histo1Component } from './pages/histos/histo1/histo1.component';
import { Histo2Component } from './pages/histos/histo2/histo2.component';
import { Histo3Component } from './pages/histos/histo3/histo3.component';
import { Histo4Component } from './pages/histos/histo4/histo4.component';
import { Histo5Component } from './pages/histos/histo5/histo5.component';
import { Histo6Component } from './pages/histos/histo6/histo6.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HistoryComponent,
    HistorypageComponent,
    Histo1Component,
    Histo2Component,
    Histo3Component,
    Histo4Component,
    Histo5Component,
    Histo6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
