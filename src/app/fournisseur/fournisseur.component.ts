import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FournisseurService } from './fournisseur.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fournisseur } from './fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  constructor(private http: HttpClient,
    private fournisseurservice: FournisseurService,
    private router: Router,
    private toastr: ToastrService) { }
  
fournisseur:Fournisseur[];
  ngOnInit(): void {
    this.fournisseurservice.getFournisseur()
    .subscribe( data => {
      console.log(data);
      this.fournisseur = data;
    });

 }
 addFournisseur(){
  this.router.navigate(['fournisseur/new']);
}
editFournisseur(fournisseur:Fournisseur){
  this.router.navigate(['fournisseur/edit/',fournisseur.id]);
}
removeFournisseur(fournisseur:Fournisseur):void{
  this.fournisseurservice.removeFournisseur(fournisseur.id)
  .subscribe( data => {
    this.fournisseur = this.fournisseur.filter(u => u !== fournisseur);
    this.toastr.warning("Deleted Successfully", "Fournisseur "+fournisseur.nom);

});
}
}
