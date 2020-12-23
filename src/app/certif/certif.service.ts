import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Certif} from './certif'
  

@Injectable({
  providedIn: 'root'
})
export class CertifService {
  baseUrl =environment.baseUrl;
  // Http Options
 httpOptions = {
  headers: new HttpHeaders                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ({
    'Content-Type': 'application/json'
  })
 }
  constructor(private http: HttpClient) { }
  certif: Certif[] = [];
  getCertif() {
    return this.http.get<[Certif]>(this.baseUrl+"allCertif");
  }
  removeCertif(id :number){
    return this.http.delete<[Certif]>(this.baseUrl+"remove/"+id);
    this.getCertif();
    
  }
  /*singleFournisseur(id :number){
    return this.http.get<[Fournisseur]>(this.baseUrl+"fournisseur/"+id)
  }*/
  addCertif(certif :Certif){
      return this.http.post(this.baseUrl+"new",JSON.stringify(certif),this.httpOptions)
  }
  editCertif(certif :Certif){
    return this.http.put(this.baseUrl+"edit",JSON.stringify(certif),this.httpOptions)
  }
}
