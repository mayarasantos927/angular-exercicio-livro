import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { LivroComponent } from './livro/livro.component';
import { AdicionaCategoriaComponent } from './adiciona-categoria/adiciona-categoria.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    AdicionaCategoriaComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
