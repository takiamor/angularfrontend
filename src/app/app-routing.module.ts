import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { AddFournisseurComponent } from './fournisseur/add-fournisseur/add-fournisseur.component';
import { EditFournisseurComponent } from './fournisseur/edit-fournisseur/edit-fournisseur.component';
//import { RemoveFournisseurComponent } from './fournisseur/remove-fournisseur/remove-fournisseur.component';

const routes: Routes = [{path: '', redirectTo: 'fournisseur/list', pathMatch: 'full'},
{ path: 'fournisseur/list', component: FournisseurComponent},
{ path: 'fournisseur/new', component: AddFournisseurComponent},
{ path: 'product/edit/:id', component: EditFournisseurComponent},
//{ path: 'product/remove/:id', component: RemoveFournisseurComponent },
//{ path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
{path: '**', redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
