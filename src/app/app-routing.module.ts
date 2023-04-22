import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent} from './pages/home/home.component';
import { HistorypageComponent } from './pages/historypage/historypage.component';
import { HistoryComponent } from './pages/history/history.component';
import { Histo1Component } from './pages/histos/histo1/histo1.component';
import { Histo2Component } from './pages/histos/histo2/histo2.component';
import { Histo3Component } from './pages/histos/histo3/histo3.component';
import { Histo4Component } from './pages/histos/histo4/histo4.component';
import { Histo5Component } from './pages/histos/histo5/histo5.component';
import { Histo6Component } from './pages/histos/histo6/histo6.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'history', component:HistoryComponent},
  {path:'history/:id', component:HistorypageComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent}, 
  {path:'histo1', component:Histo1Component},
  {path:'histo2', component:Histo2Component},
  {path:'histo3', component:Histo3Component},
  {path:'histo4', component:Histo4Component},
  {path:'histo5', component:Histo5Component},
  {path:'histo6', component:Histo6Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
