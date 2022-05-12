import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../products.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product: Product | null = null;
  @Output() addToCartList = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(productId: number){

  }

}
