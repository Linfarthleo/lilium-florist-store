import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Flor} from "../data/interfaces/flor";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlAPI: string = "https://trefle.io/api/v1/plants?token=https://trefle.io/api/v1/plants?token=9_xP6S7xOrryg_luwjRPDn-Bz5a3J7iQZFKCe5zXFaU";
  private baseUrl: string = "http://localhost:8080/v1/flor"

  constructor(private httpClient: HttpClient) {
  }

  getProductDetails(id: number): Observable<any> {
    return this.httpClient.get(`${environment.pokedexBaseUrl}/pokemon/${id}`);
  }

  getProductList(): Observable<any> {
    return this.httpClient.get(`${environment.pokedexBaseUrl}/pokemon`);
  }

  getFlowerList(): Observable<Flor[]> {
    return this.httpClient.get<Flor[]>(`${this.baseUrl}`);
  }

  getFlowerById(id: number): Observable<Flor> {
    return this.httpClient.get<Flor>(`${this.baseUrl}/${id}`);
  }
}
