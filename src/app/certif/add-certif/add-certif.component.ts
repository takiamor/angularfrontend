import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CertifService } from 'src/app/certif/certif.service';

@Component({
  selector: 'app-add-certif',
  templateUrl: './add-certif.component.html',
  styleUrls: ['./add-certif.component.css']
})
export class AddCertifComponent implements OnInit {

  CertifForm: FormGroup;
  submitted = false;

  constructor(private http:HttpClient,
    private router:Router,
    private formBuilder: FormBuilder,
    private certifservice:CertifService) { }

  ngOnInit(): void {
    this.CertifForm=this.createForm();
  }
  createForm(): FormGroup {
    return this.formBuilder.group({
      id: [],
      code: ['', [Validators.required]],
      date: ['', [Validators.required,Validators.minLength(8)]],
      
      
    });}
    get f() { return this.CertifForm.controls; }

    onSave(){
      this.submitted = true;
      if (this.CertifForm.valid) {
        this.certifservice.addCertif(this.CertifForm.value)
        .subscribe( () => {
            this.router.navigate(['certif/list']);
        });
      }else{
          return;
      }
    }


}
