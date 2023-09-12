import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Flor} from "../../data/interfaces/flor";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productIds!: string[];
  flowerIds: number[] = [];

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.getFlower();
    // this.productService.getProductList().subscribe({
    //   next: (data) => {
    //     this.productIds = [];
    //     data.results.forEach((item: any) => {
    //       this.productIds.push(item.url.slice(0, -1).split('/').pop());
    //     });
    //   },
    // });
  }

  getFlower(): void {
    this.productService.getFlowerList().subscribe({
      next: (data) => {
        this.flowerIds = data.map(flower => flower.idFlor);
      },
      error: (error) => {
        console.error('Error fetching flower list', error);
      },
      complete: () => {
        console.log('Flower list fetching complete');
      }
    });
  }
}
