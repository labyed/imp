import {Component, OnInit} from '@angular/core';

import {CandidatService} from "../../shared/service/candidat.service";
import {RecruteurService} from "../../shared/service/recruteur.service";
import {Recruteur} from "../../recruteur/interfaces/recruteur";
import {Poste} from "../../recruteur/interfaces/poste";
import {Http} from "@angular/http";
import {candidat} from "../../Candidat/interfaces/candidat";
import {Commentaire} from "../../Candidat/interfaces/commentaire";
import {Avis} from "../../recruteur/interfaces/avis";

@Component({
    selector: 'app-accueil',
    providers: [CandidatService],
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.css']
})

export class AccueilComponent implements OnInit {

    private candidats: candidat[];
    private recruteurs: Recruteur[];
    private postes: Poste[];
    private comments: Commentaire[];
    private avis: Avis[];

    private _nbMale: number;
    private _nbFemelle: number;

    private menuList: any[];

    constructor(private http: Http, private candidatService: CandidatService, private recruteurService: RecruteurService) {
        this.candidats = [];
        this.avis = [];
        this.recruteurs = [];
        this.postes = [];
        this.comments = [];
        this.menuList = [];
        this._nbFemelle = 0;
        this._nbMale = 0;
    }

    getCandidats(): void {
        this.candidatService.getCandidats().subscribe(candidats => this.candidats = candidats);
        //console.log(JSON.stringify(this.candidats));
    }

    getComments(): void {
        this.candidatService.getComments().then(com => this.comments = com);
    }

  getRecruteurs(): void {
    this.recruteurService.getRecruteurs().subscribe(recruteurs => this.recruteurs = recruteurs);
  }

  getPostes(): void {
    this.recruteurService.getPosts().subscribe(postes => this.postes = postes);
  }

    getnbFemelle(): void {
        this.candidatService.getNbFemelle().subscribe(f => this._nbFemelle = f);
    }

    getnbMale(): void {
        this.candidatService.getNbMale().subscribe(m => this._nbMale = m);
    }

    getNbAvis(): void {
      this.candidatService.getAllAvis().subscribe(a => this.avis = a);
    }

  ngOnInit(): void {
    this.getCandidats();
    this.getnbFemelle();
    this.getnbMale();
    this.getRecruteurs();
    this.getPostes();
    this.getNbAvis();
 /*   this.getComments();
    this.setMenuList();*/
  }

    setMenuList(): void {
        //  alert(this.candidats.length);
        this.menuList = [
            {name: "Totale candidats", value: '' + this.candidats.length, croissance: "15", positive: "true"},
            {name: "Totale recruteurs", value: "27", croissance: "10", positive: "true"},
            {name: "Nombres postes à pouvoir", value: "16", croissance: "20", positive: "true"},
            {name: "Nombres de filles", value: "19", croissance: "20", positive: "false"},
            {name: "Connexions totale", value: "10", croissance: "12", positive: "true"}
        ];
    }
}
