import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productIds!: string[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe({
      next: (data) => {
        this.productIds = [];
        data.results.forEach((item: any) => {
          this.productIds.push(item.url.slice(0, -1).split('/').pop());
        });
      },
    });
  }
}
