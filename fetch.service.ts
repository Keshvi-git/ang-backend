import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private apiUrl = "http://localhost:4000/category";
  private baseurl = "http://localhost:4000/product";

  constructor() {}
  private _http = inject(HttpClient)

  getAll(){
    return this._http.get(this.apiUrl)
}
  // getProductsByCategory(categoryId: string) {
  //   return this.http.get<any[]>(`http://localhost:4000/product/category/${categoryId}`);
  // }

  getProductsByCategory(categoryId: string): Observable<any[]> {
    return this._http.get<any[]>(`${this.baseurl}/category/${categoryId}`);
  }
  
}
