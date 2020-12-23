import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CertifService } from 'src/app/certif/certif.service';


@Component({
  selector: 'app-edit-certif',
  templateUrl: './edit-certif.component.html',
  styleUrls: ['./edit-certif.component.css']
})
export class EditCertifComponent implements OnInit {

  EditForm: FormGroup;
  submitted = false;
  d ={};

  constructor(private http:HttpClient,
    private router:Router,
    private formBuilder: FormBuilder,
    private certifservice:CertifService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.certifservice.removeCertif(id)
    .subscribe( data => {
      console.log(data);
     
      
      this.EditForm.setValue(data);
    
    });
    this.EditForm=this.formBuilder.group({
      id: [],
      code: ['', [Validators.required]],
      date: ['', [Validators.required,Validators]],
      
      createdAt: [],
      updatedAt: []
    });
  }
  get f() { return this.EditForm.controls; }

    OnEdit(){
      this.submitted = true;
      if (this.EditForm.valid) {
       this.certifservice.editCertif(this.EditForm.value)
        .subscribe( data => {
            this.router.navigate(['certif/list']);
        });
      }else{
          return;
      }
    }

}
