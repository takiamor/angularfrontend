import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../fournisseur.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  FournisseurForm: FormGroup;
  submitted = false;

  constructor(private http:HttpClient,
    private router:Router,
    private formBuilder: FormBuilder,
    private fournisseurservice:FournisseurService) { }

  ngOnInit(): void {
    this.FournisseurForm=this.createForm();
  }
  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [],
      nom: ['', [Validators.required]],
      mf: ['', [Validators.required,Validators.minLength(8)]],
      adr: ['', Validators.required],
      mail: ['', [Validators.required]],
      
    });}
    get f() { return this.FournisseurForm.controls; }

    onSave(){
      this.submitted = true;
      if (this.FournisseurForm.valid) {
        this.fournisseurservice.addFournisseur(this.FournisseurForm.value)
        .subscribe( data => {
            this.router.navigate(['fournisseur/list']);
        });
      }else{
          return;
      }
    }

}
