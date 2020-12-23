import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FournisseurService } from '../fournisseur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {
  
  EditForm: FormGroup;
  submitted = false;
  d ={};

  constructor(private http:HttpClient,
    private router:Router,
    private formBuilder: FormBuilder,
    private fournisseurservice:FournisseurService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fournisseurservice.removeFournisseur(id)
    .subscribe( data => {
      console.log(data);
     
      
      this.EditForm.setValue(data);
    
    });
    this.EditForm=this.formBuilder.group({
      id: [],
      nom: ['', [Validators.required]],
      mf: ['', [Validators.required,Validators.minLength(8)]],
      adr: ['', Validators.required],
      mail: ['', [Validators.required]],
      createdAt: [],
      updatedAt: []
    });
  }
  get f() { return this.EditForm.controls; }
    OnEdit(){
      this.submitted = true;
      if (this.EditForm.valid) {
       this.fournisseurservice.editFournisseur(this.EditForm.value)
        .subscribe( data => {
            this.router.navigate(['fournisseur/list']);
        });
      }else{
          return;
      }
    }
}
