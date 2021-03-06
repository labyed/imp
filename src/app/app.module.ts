import {CreerProfileCandidatComponent} from "./Candidat/creer-profile-candidat/creer-profile-candidat.component";
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {Ng2AutoCompleteModule} from 'ng2-auto-complete';
import {MdInputModule} from '@angular/material/input';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from "@angular/forms";
import { Md5 } from 'ts-md5/dist/md5';

import './visiteur/moderateur/candidat-search/rxjs-extensions';
import {APP_ROUTES} from './app.routes';
import {AccueilComponent} from './visiteur/accueil/accueil.component';
import {LoginComponent} from './visiteur/login/login.component';
import {InscriptionUtilisateurComponent} from "./utilisateur/inscription/inscription-utilisateur.component";
import {ModerateurComponent} from './visiteur/moderateur/moderateur.component';
import {CandidatDetailComponent} from './visiteur/moderateur/candidat-detail/candidat-detail.component';
import {CandidatSearchComponent} from './visiteur/moderateur/candidat-search/candidat-search.component';
import {SignalementComponent} from './visiteur/moderateur/signalement/signalement.component';
import {RecruteurDetailComponent} from './visiteur/moderateur/recruteur-detail/recruteur-detail.component';
import { InscriptionLinkedinComponent } from './utilisateur/inscription-linkedin/inscription-linkedin.component';
import {AppComponent} from './app.component';
import {PosteFormComponent} from './recruteur/poste-form/poste-form.component';
import {SavoirSpeComponent} from './recruteur/savoir-spe/savoir-spe.component';
import {SavoirEtreComponent} from './recruteur/savoir-etre/savoir-etre.component';
import {SavoirFaireComponent} from './recruteur/savoir-faire/savoir-faire.component';
import {MetierComponent} from './recruteur/metier/metier.component';
import {FonctionnelleComponent} from './recruteur/fonctionnelle/fonctionnelle.component';
import {TechniqueComponent} from './recruteur/technique/technique.component';
import {LinguistiquesComponent} from './recruteur/linguistiques/linguistiques.component';
import {FormationComponent} from './recruteur/formation/formation.component';
import {UpdateComponent} from './recruteur/poste-form/update/update.component';
import {CertificationComponent} from './recruteur/certification/certification.component';
import {OffreComponent} from './recruteur/offres/offre.component';
import {UpdateProfileCandidatComponent} from "./Candidat/update-profile-candidat/update-profile-candidat.component";
import {FormComponent} from "./Candidat/form/form.component";
import {DashboardCandidatComponent} from "./Candidat/dashboard/dashboardCandidat.component";
import {MessagesCandidatComponent} from "./Candidat/messages-candidat/messages-candidat.component";
import {PostesCandidatComponent} from "./Candidat/postes/postesCandidat.component";
import {FormationCandidatComponent} from "./Candidat/profile/formation/formation.component";
import {ExperienceComponent} from "./Candidat/profile/experience/experience.component";
import {CompetenceComponent} from "./Candidat/profile/competence/competence.component";
import {ProfileCandidatComponent} from "./Candidat/profile/profile.component";
import {FormInvitationComponent} from "./shared/form-invitation"

import { CandidatService } from './shared/service/candidat.service';
import { RecruteurService } from "./shared/service/recruteur.service";
import { MailService } from "./shared/service/mail.service";
import {NotificationService} from "./shared/service/notification.service";
import { CompetenceTypePipe } from './Candidat/profile/competence-type.pipe';
import {CardCondidatComponent} from "./Candidat/card-condidat/card-condidat.component";
import {ListCandidatPosteComponent} from "./visiteur/list-candidat-poste/list-candidat-poste.component";
import {FilterCandidatPipe} from "./Candidat/filter-candidat-pipe/filter-candidat.pipe";
import {FilterCandidatCountPipe} from "./Candidat/filter-candidat-pipe/filter-candidat-count.pipe";
import {CardPosteComponent} from "./recruteur/card-poste/card-poste.component";
import {FilterPoste} from "./recruteur/filtrer-poste-pipe/filter-poste.pipe";
import {FiltrerPosteCount} from "./recruteur/filtrer-poste-pipe/filtrer-poste-count.pipe";
import { MatchingComponent } from './recruteur/matching/matching.component';
import { AvisComponent } from './recruteur/avis/avis.component';
import { RechercherOffresComponent } from './Candidat/rechercher-offres/rechercher-offres.component';
import { CardOffreComponent } from './shared/card-offre/card-offre.component';
import { ProfilComponent } from './recruteur/offres/profil/profil.component';
import { GestionAvisCandidatsComponent } from './visiteur/moderateur/gestion-avis-candidats/gestion-avis-candidats.component';
import { DataTableModule } from 'angular2-datatable';
import { ToasterModule } from 'angular2-toaster';
import {DataFilterPipe} from "./visiteur/moderateur/gestion-avis-candidats/data-filter.pipe";
import { PosteDetailComponent } from './recruteur/poste-detail/poste-detail.component';
import { ConnexionLinkedinComponent } from './utilisateur/connexion-linkedin/connexion-linkedin.component';
import {OffersService} from "./shared/offers-service/offers.service";

@NgModule({
    declarations: [
      AppComponent,
      PosteFormComponent,
      AccueilComponent,
      LoginComponent,
      InscriptionUtilisateurComponent,
      ModerateurComponent,
      CandidatDetailComponent,
      CandidatSearchComponent,
      SignalementComponent,
      RecruteurDetailComponent,
      SavoirSpeComponent,
      SavoirEtreComponent,
      SavoirFaireComponent,
      MetierComponent,
      FonctionnelleComponent,
      TechniqueComponent,
      LinguistiquesComponent,
      FormationComponent,
      UpdateComponent,
      CertificationComponent,
      CreerProfileCandidatComponent,
      UpdateProfileCandidatComponent,
      FormComponent,
      DashboardCandidatComponent,
      MessagesCandidatComponent,
      PostesCandidatComponent,
      InscriptionLinkedinComponent,
      FormationCandidatComponent,
      ExperienceComponent,
      CompetenceComponent,
      ProfileCandidatComponent,
      FormInvitationComponent,
      CompetenceTypePipe,
      OffreComponent,
      CardCondidatComponent,
      ListCandidatPosteComponent,
      FilterCandidatPipe,
      FilterCandidatCountPipe,
      CardPosteComponent,
      FilterPoste,
      FiltrerPosteCount,
      MatchingComponent,
      AvisComponent,
      ProfilComponent,
      GestionAvisCandidatsComponent,
      DataFilterPipe,
      RechercherOffresComponent,
      CardOffreComponent,
      ProfilComponent,
      PosteDetailComponent,
      ConnexionLinkedinComponent

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    APP_ROUTES,
    MdInputModule,
    Ng2AutoCompleteModule,
    ChartsModule,
    MaterialModule,
    ReactiveFormsModule,
    DataTableModule,
    ToasterModule
  ],
  providers: [CandidatService,RecruteurService, MailService, NotificationService, OffersService, Md5],
  bootstrap: [AppComponent]
})
export class AppModule {
}

