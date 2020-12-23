import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './nav-side-footer/navbar/navbar.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ToastrModule } from 'ngx-toastr';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
//import { RemoveFournisseurComponent } from './fournisseur/remove-fournisseur/remove-fournisseur.component';
import { CertifComponent } from './certif/certif.component';
import { AddCertifComponent } from './certif/add-certif/add-certif.component';
import { EditCertifComponent } from './certif/edit-certif/edit-certif.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FournisseurComponent,
    AddFournisseurComponent,
    EditFournisseurComponent,
    //RemoveFournisseurComponent,
    CertifComponent,
    AddCertifComponent,
    EditCertifComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
