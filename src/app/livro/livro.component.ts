import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss']
})
export class LivroComponent implements OnInit {

  categorias : Categoria[]

  constructor(public categoriaService: CategoriaService) {
    this.categorias = this.categoriaService.getCategoria();
  }

  ngOnInit() {
  }


  adicionarCategoria (): void{
    console.log("testando o adicionar categorias...");
  }

}
