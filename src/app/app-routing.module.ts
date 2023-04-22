import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent} from './pages/home/home.component';
import { HistorypageComponent } from './pages/historypage/historypage.component';
import { HistoryComponent } from './pages/history/history.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'history', component:HistoryComponent},
  {path:'history/:id', component:HistorypageComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
