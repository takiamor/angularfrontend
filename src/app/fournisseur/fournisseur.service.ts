import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Fournisseur } from './fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  baseUrl =environment.baseUrl;
  // Http Options
 httpOptions = {
  headers: new HttpHeaders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ({
    'Content-Type': 'application/json'
  })
} 

  constructor(private http: HttpClient){ }
  fournisseur: Fournisseur[] = [];
getFournisseur() {
  return this.http.get<[Fournisseur]>(this.baseUrl+"allFournisseur");
}
removeFournisseur(id :number){
  return this.http.delete<[Fournisseur]>(this.baseUrl+"remove/"+id);
  this.getFournisseur();
  
}
/*singleFournisseur(id :number){
  return this.http.get<[Fournisseur]>(this.baseUrl+"fournisseur/"+id)
}*/
addFournisseur(fournisseur :Fournisseur){
    return this.http.post(this.baseUrl+"new",JSON.stringify(fournisseur),this.httpOptions)
}
editFournisseur(fournisseur :Fournisseur){
  return this.http.put(this.baseUrl+"edit",JSON.stringify(fournisseur),this.httpOptions)
}

}