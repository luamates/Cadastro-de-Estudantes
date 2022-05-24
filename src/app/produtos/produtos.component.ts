import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { PRODUTOS } from '../mock-produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos = PRODUTOS;

  produto: Produto = {
    id: 1, 
    name: 'Geforce RTX 3090 24gb', 
    preco: 19540, 
    qtdEstoque: 61, 
    categoria: 'Gigabyte'
  }

  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct?: Produto;
  onSelect(produto: Produto): void {
  this.selectedProduct = produto;
}

}
