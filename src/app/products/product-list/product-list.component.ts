import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 /* pokemonIds: string[];

  constructor(private productService: PokemonService) {}
*/
  ngOnInit(): void {
    /*
    this.pokemonService.getPokemonList().subscribe({
      next: (data) => {
        this.pokemonIds = [];
        data.results.forEach((item: any) => {
          this.pokemonIds.push(item.url.slice(0, -1).split('/').pop());
        });
      },
    });
    */
  }
  
}
