import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../models/Produit";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  server: string ='http://localhost:8000/api/';

  constructor(private  http: HttpClient) {
  }


 
  listProduct():Observable<Produit[]> {

    return this.http.get<Produit[]>(this.server+'listeproduits');
  }

  
}
