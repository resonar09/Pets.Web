import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://localhost:5001/api';

export interface Product {
  name: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class PetProductsService {
  constructor(private http: HttpClient) { }

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(apiUrl + '/products');
  }
}
