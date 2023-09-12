import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) {}

  getProductDetails(id: number): Observable<any> {
    return this.httpClient.get(`${environment.pokedexBaseUrl}/pokemon/${id}`);
  }

  getProductList(): Observable<any> {
    return this.httpClient.get(`${environment.pokedexBaseUrl}/pokemon`);
  }
}
