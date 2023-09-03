import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RamdomComponent } from './ramdom/ramdom.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'detail', component: DetailsComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'ramdom', component: RamdomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
