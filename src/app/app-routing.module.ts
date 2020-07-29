import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { ListeproduitsComponent } from './listeproduits/listeproduits.component';


const routes: Routes =  [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component:ListeproduitsComponent
      }
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
