import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdicionaCategoriaComponent } from './adiciona-categoria/adiciona-categoria.component';
import { LivroComponent } from './livro/livro.component';


const routes: Routes = [
  {path: 'adicionaCategoria', component: AdicionaCategoriaComponent},
  {path: 'categorias', component: LivroComponent},
  {path: '', redirectTo: '/categorias', pathMatch: 'full'}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
