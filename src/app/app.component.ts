import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppQuery } from './services/states/app.state';
import { ProductsQuery } from './services/states/products.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public $products = this.state.select(s => s.productsList);

  public constructor(private state: ProductsQuery) {
    
  }
}
