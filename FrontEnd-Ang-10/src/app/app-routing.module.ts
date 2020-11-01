import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjourCarComponent } from './component/ajour-car/ajour-car.component';
import { ListCarComponent } from './component/list-car/list-car.component';

const routes: Routes = [
  { path:"carlist", component:ListCarComponent},
  {path:'addlist', component:AjourCarComponent},
  {path:'addlist/:id', component:AjourCarComponent},
  {path:'',redirectTo:'carlist',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
