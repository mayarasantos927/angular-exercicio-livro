import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-adiciona-categoria',
  templateUrl: './adiciona-categoria.component.html',
  styleUrls: ['./adiciona-categoria.component.scss']
})
export class AdicionaCategoriaComponent implements OnInit {

  nomeCategoria: string;

  constructor(private categoriaService : CategoriaService, private location: Location) { }
  
  ngOnInit() {
  }

  adicionaCategoria (): void {
    if (this.nomeCategoria){
      this.categoriaService.adicionaCategoria({id: this.categoriaService.nextId(), nome: this.nomeCategoria});
      window.alert ("Categoria adicionada com sucesso!");
      this.location.back();
    }
    else{
      window.alert ('Você deve preencher o nome da categoria!');
      }
    }

    voltar () {
      this.location.back();
    }
}
