import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  productDetail!: string;

  productName!: string;
  productImageUrl!: string;
  productPrice!: number;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getProductDetails(Number(this.productDetail))
      .subscribe({
        next: (data) => {
          this.productName = data.name;
          this.productImageUrl = data.sprites.front_default;
          this.productPrice = data.price;
        },
      });
  }
}
