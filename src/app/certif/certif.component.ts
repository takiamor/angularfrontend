import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CertifService } from './certif.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Certif } from './certif';

@Component({
  selector: 'app-certif',
  templateUrl: './certif.component.html',
  styleUrls: ['./certif.component.css']
})
export class CertifComponent implements OnInit {

  constructor(private http: HttpClient,
    private certifservice: CertifService,
    private router: Router,
    private toastr: ToastrService) { }
  
certif:Certif[];
  ngOnInit(): void {
    this.certifservice.getCertif()
    .subscribe( data => {
      console.log(data);
      this.certif = data;
    });

 }
 addCertif(){
  this.router.navigate(['certif/new']);
}
editCertif(certif:Certif){
  this.router.navigate(['certif/edit/',certif.id]);
}
removeCertif(certif:Certif):void{
  this.certifservice.removeCertif(certif.id)
  .subscribe( data => {
    this.certif = this.certif.filter(u => u !== certif);
    this.toastr.warning("Deleted Successfully", "certif "+certif.code);

});
}

}
