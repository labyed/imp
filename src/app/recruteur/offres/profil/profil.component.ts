import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";

import {RecruteurService} from "../../../shared/service/recruteur.service";
import {Recruteur} from "../../interfaces/recruteur";
import {CustomValidators} from "./custom-validators";
import {NotificationService} from "../../../shared/service/notification.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  private _data : any;
  private _isUpdateMode: boolean;

  private _formMdp: FormGroup;
  private _modelMdp : any ;
  private isUploading : boolean ;
  public _urlPhoto : string;

  constructor(private _serviceRecruteur : RecruteurService, private _notificationService : NotificationService) {
    this._data = {} ;
    this._isUpdateMode = false ;

    this.isUploading = false;
    this._formMdp = this._buildForm();
    this._modelMdp  = {
      password: '',
      newPassword: '',
      passwordConfirm: ''
    }

  }


  ngOnChanges(record) {
    if(record.data && record.data.currentValue) {
      this._data = record.data.currentValue;
      this._isUpdateMode = !!this._data;
    }
  }



  ngOnInit() {
    this._serviceRecruteur.getRecruteur(parseInt(localStorage.getItem("user"))).subscribe((data: Recruteur) => {
      this._data = data;
      if(this._data.photo){
        this._urlPhoto = this._serviceRecruteur.getPhotoUrl(this.data.photo)
      }
    })
  }


  get data() : Recruteur{
    return this._data;
  }


  get update() : boolean{
    return this._isUpdateMode ;
  }


  modifier(){
    this._isUpdateMode = !this._isUpdateMode;
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      password: new FormControl('', Validators.compose([ Validators.required])),
      passwords:  new FormGroup({
        newPassword: new FormControl('', Validators.compose([ Validators.required])),
        passwordConfirm : new FormControl('', Validators.compose([ Validators.required])),
      }, Validators.compose([ CustomValidators.passwordsEqual]))
    });
  }


  get formMdp(): FormGroup {
    return this._formMdp;
  }


  updateInfos(){
    console.log(this._data);
    this._serviceRecruteur.updateInfos(this._data).subscribe( (res : any) => {
      this._notificationService.addNotification(res.message, res.success);
    });
  }


  save(model: any) {

    var data = {
      "email" : this._data.email,
      "oldMDP" : model.password,
      "newMDP" : model.passwords.newPassword
    }

    this._serviceRecruteur.updateMdp(data).subscribe((data2: any) => {
      this._notificationService.addNotification(data2.message, data2.success);
    });
  }


  onChange(event) {
    this.isUploading = true;
    let files = event.srcElement.files;

    this._serviceRecruteur.uploadPhoto(files).subscribe((id_photo: string) => {
      this.data.photo = id_photo;
        this._urlPhoto = this._serviceRecruteur.getPhotoUrl(this.data.photo)
          this.isUploading = false;
      });

  }

  get urlPhoto(): string {
    return this._urlPhoto;
  }

  set urlPhoto(value: string) {
    this._urlPhoto = value;
  }



}