import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../shared/service/authentication.service'
import { CandidatService } from '../../shared/service/candidat.service';
import {RecruteurService} from "../../shared/service/recruteur.service";
import {Recruteur} from "../../recruteur/interfaces/recruteur";
import {candidat} from "../../Candidat/interfaces/candidat";

@Component({
  selector: 'app-moderateur',
  providers: [AuthenticationService, CandidatService, RecruteurService],
  templateUrl: './moderateur.component.html',
  styleUrls: ['./moderateur.component.css']
})
export class ModerateurComponent implements OnInit {

  candidats: candidat[];
  recruteurs: Recruteur[];
  selectedCandidat: candidat;
  selectedRecruteur: Recruteur;
  signalement: boolean = false;
  rechercher: boolean = false;

  constructor(private _service:AuthenticationService,
              private candidatService: CandidatService, private recruteurService: RecruteurService) {
    this.candidats = [];
    this.recruteurs = [];
   // this.selectedRecruteur = {  id: 1,idEntreprise: 1, email: "string", banned: 0, nom: "string", photo : "null", prenom: "string"};
  }

  ngOnInit() {
    this.getCandidats();
    this._service.checkCredentialModerator();
    this.getRecruteurs();
  }


  logout() {
    this._service.logout();
  }

  getRecruteurs(): void {
    this.recruteurService.getRecruteurs().subscribe(recruteurs => this.recruteurs = recruteurs);
  }


  getCandidats(): void {
    this.candidatService.getCandidats().subscribe(candidats => this.candidats = candidats);
  //  console.log(JSON.stringify(this.candidats));
  }

  getSelectedCandidats(): candidat {
    return this.selectedCandidat;
  }

  onSelectCandidat(candidat: candidat): void {
    this.signalement = false;
    this.rechercher = false;
    this.selectedRecruteur = null;
    this.selectedCandidat = candidat;
  }

  onSelectRecruteur(recruteur: Recruteur): void {
    this.signalement = false;
    this.rechercher = false;
    this.selectedCandidat = null;
    this.selectedRecruteur = recruteur;
  }

  setSignal(): void {
    this.selectedRecruteur = null;
    this.selectedCandidat = null;
    this.rechercher = false;
    this.signalement = true;
  }

  recherche(): void {
    this.selectedRecruteur = null;
    this.selectedCandidat = null;
    this.rechercher = true;
    this.signalement = false;
  }

  /**
   * Function to ban a person
   *
   * @param person
   */
  bannir(candidat: candidat) {
    // Get the snackbar DIV
    var x = document.getElementById("ban")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    this.candidatService.bannir(candidat).subscribe(c => this.selectedCandidat = c);
    this.getCandidats();
  }

  unBan(candidat: candidat) {
    // Get the snackbar DIV
    var x = document.getElementById("unban")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    this.candidatService.unBan(candidat).subscribe(c => this.selectedCandidat = c);
    this.getCandidats();
  }

  bannirRecruteur(recruteur: Recruteur) {
    // Get the snackbar DIV
    var x = document.getElementById("ban")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

   // alert("fonctionnalité 'banir recruteur "+recruteur.nom +" ' non defini (manque le back)");
    this.recruteurService.bannir(recruteur).subscribe(r => this.selectedRecruteur = r);
    this.getRecruteurs();
  }

  unBanRecruteur(recruteur: Recruteur) {
    // Get the snackbar DIV
    var x = document.getElementById("unban")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

    // alert("fonctionnalité 'banir recruteur "+recruteur.nom +" ' non defini (manque le back)");
    this.recruteurService.unBan(recruteur).subscribe(r => this.selectedRecruteur = r);
    this.getRecruteurs();
  }

  goToDetailCandidat(idCandidat: number){
    this.signalement = false;
    this.rechercher = false;
    this.candidatService.getCandidat("" + idCandidat).subscribe(candidat => this.selectedCandidat = candidat);
  }

  goToDetailRecruteur(idRecruteur: number){
    this.signalement = false;
    this.rechercher = false;
    this.recruteurService.getRecruteur(idRecruteur).subscribe(recruteur => this.selectedRecruteur = recruteur);
  }

}
