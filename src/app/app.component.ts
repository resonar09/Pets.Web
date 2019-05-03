import { Component } from '@angular/core';
import { Product, PetProductsService } from './pet-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pets-Web';
  productData: Product[] = [];

  constructor(svc: PetProductsService) {
    svc.loadProducts()
      .subscribe(products => this.productData = products);
  }
}
