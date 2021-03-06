import {Component, OnInit, Input} from "@angular/core";
import {candidat} from "../interfaces/candidat";
import {CandidatService} from "../../shared/service/candidat.service";
import {formation} from "../interfaces/formation";
import {competence} from "../interfaces/competence";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

import {ActivatedRoute, Router} from "@angular/router";
import {experiencePro} from "../interfaces/experiencePro";
import {AuthenticationService} from "../../shared/service/authentication.service";

@Component({
  selector: 'app-profile-candidat',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileCandidatComponent implements OnInit {



  private _candidat: candidat;
  private _dialogModal: string;
  private _id: string;
  private _urlPhoto: string;
  private _onglet: string;

  constructor(private _service:AuthenticationService, private _route: ActivatedRoute, private _candidatService: CandidatService, private _router: Router) {
    this._dialogModal = 'inactive';

    this.candidat = {};
    this._id = "";
    this._onglet = "comp";
  }

  ngOnInit() {
    if (localStorage.getItem("user") === null) {
      return false;
    }
    else {
      this._candidatService.getCandidat(localStorage.getItem("user")).subscribe((candidat: candidat) => {
        this._candidat = candidat;
        this._urlPhoto = this._candidatService.getPhotoUrl(candidat.photo);
      });
    }
  }

  genererCV(){
    this._candidatService.getCv(Number(localStorage.getItem("user")), this._candidat.nom);
  }

  goEditProfil(){
    this._router.navigate(['/editCandidat/']);
  }

  @Input() set candidat(candidat: any) {
    this._candidat = candidat;
  }

  get candidat(): any {
    return this._candidat;
  }


  get _candidatName(): string {
    return this._candidat.nom;
  }

  get _candidatFName(): string {
    return this._candidat.prenom;
  }

  get _candidatId(): number {
    return this._candidat.id;
  }

  get _candidatAddress(): string {
    return this._candidat.adresse;
  }

  get _candidatEmail(): string {
    return this._candidat.email;
  }

  get _candidatPhoneFix(): string {
    return this._candidat.telfix;
  }

  get _candidatPhoneMobile(): string {
    return this._candidat.telperso;
  }

  get _candidatPhoto(): any {
    return this._candidat.photo;
  }

  get _candidatFormations(): formation[] {
    return this._candidat.formation;
  }

  get _candidatExperiences(): experiencePro[] {
    return this._candidat.experiencePro;
  }

  get _candidatCompetences(): competence[] {
    return this._candidat.competence;
  }

  get _candidatSuspended(): boolean {
    return this._candidat.suspended;
  }

  suspendCandidat(c: candidat) {
    this._candidatService.suspend(c).subscribe(
      (cdd: candidat) => {
        this._candidat = cdd;
      });
  }

  unsuspendCandidat(c: candidat) {
    this._candidatService.unSuspend(c).subscribe(
      (cdd: candidat) => {
        this._candidat = cdd;
      });
  }

  get modalStatus(): string {
    return this._dialogModal
  }

  showModal() {
    this._dialogModal = 'active';
  }

  hideModal() {
    this._dialogModal = 'inactive';
  }

  get urlPhoto(): string {
    return this._urlPhoto;
  }

  set urlPhoto(value: string) {
    this._urlPhoto = value;
  }

  get onglet(): string {
    return this._onglet;
  }

  set onglet(value: string) {
    this._onglet = value;
    console.log("onglet : " + value);
  }

  setOnglet(onglet: string) {
    this._onglet = onglet;
  }

  deleteCandidat(c: candidat){
    this._candidatService.delete(c).subscribe();
    this._service.logout();
  }

}
