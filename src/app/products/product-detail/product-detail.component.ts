import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input()
  productDetail!: number;

  productName!: string;
  productImageUrl!: string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getFlowerDetails(this.productDetail);
  }

  getFlowerDetails(id: number): void {
    this.productService.getFlowerById(id).subscribe({
      next: (data) => {
        this.productName = data.nombreFlor;
        this.productImageUrl = data.imagenFlor;
      }
    });
  }


}
