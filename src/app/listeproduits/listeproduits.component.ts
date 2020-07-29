import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../shared/services/produit-service.service';
import { Produit } from '../shared/models/Produit';

@Component({
  selector: 'app-listeproduits',
  templateUrl: './listeproduits.component.html',
  styleUrls: ['./listeproduits.component.css']
})
export class ListeproduitsComponent implements OnInit {

  produits: Produit[];
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.listProduct().subscribe(data => { 
      console.log(data);
      this.produits  = data;
    } );

}
}
