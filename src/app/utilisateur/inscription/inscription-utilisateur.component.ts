import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";
import { Location }  from '@angular/common';
import {environment} from "../../../environments/environment";
import {Utilisateur} from "../utilisateur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: 'inscription-utilisateur.component.html',
  styleUrls: ['inscription-utilisateur.component.css']
})

export class InscriptionUtilisateurComponent implements OnInit {
  public email:string;
  public motdepasse:string;
  _utilisateur: Utilisateur;
  users: Utilisateur[];

  private headers = new Headers({'Content-Type': 'application/json'});

  // private property to store all backend URLs
  private _backendURL: any;
  private candidatsUrl = 'api/candidats';  // URL to web api

  constructor(private http: Http, private _router: Router, private location: Location) {
    this._backendURL = {};
    this.users = [{  id:1, email:'string', motdepasse:'string' }];
    this._utilisateur = {  id:1, email:'string', motdepasse:'string' };

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  ngOnInit() {
     this.http.get(this._backendURL.allUser)
      .map( res =>  res.json() )
       .subscribe(us => this.users = us);
  }

  onSubmit(): void {
    this.inscrireUtilisateur();
  }

  inscrireUtilisateur() {
    this._utilisateur.email = this.email;
    this._utilisateur.motdepasse = this.motdepasse;

    const requestOptions = { headers: new Headers({'Content-Type': 'application/json'})};
    this.http.post("http://localhost:8080/rest/utilisateur/inscrire", this._utilisateur , requestOptions)
      .subscribe();
    this._router.navigate(['/accueil']);
    }

  goBack(): void {
    this.location.back();
  }

  goLinkedIn(): void{
    console.log("test");
    //this._router.navigate(['/inscription-linkedin']);

    //https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86g3ojziahkhnk&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome%2Finscription-linkedin&state=987654321&scope=r_basicprofile
      window.location.href="https://www.linkedin.com/oauth/v2/authorization?" +
        "response_type=code&" +
        "client_id=86g3ojziahkhnk&" +
        "redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fhome%2Finscription-linkedin&" +
        "state=987654321&" +
        "scope=r_emailaddress";

  }
}


