import {RouterModule, Routes} from '@angular/router';

// APP COMPONENTS

import {UpdateComponent} from './recruteur/poste-form/update/'
import {AccueilComponent} from './visiteur/accueil/accueil.component';
import {ModerateurComponent} from "./visiteur/moderateur/moderateur.component";
import {PosteFormComponent} from './recruteur/poste-form/poste-form.component';
import {LoginComponent} from "./visiteur/login/login.component";
import {InscriptionUtilisateurComponent} from "./utilisateur/inscription/inscription-utilisateur.component";
import {OffreComponent} from './recruteur/offres/offre.component';
import {InscriptionLinkedinComponent} from "./utilisateur/inscription-linkedin/inscription-linkedin.component";
import {UpdateProfileCandidatComponent} from "./Candidat/update-profile-candidat/update-profile-candidat.component";
import {DashboardCandidatComponent} from "./Candidat/dashboard/dashboardCandidat.component";
import {ProfileCandidatComponent} from "./Candidat/profile/profile.component";
import {ListCandidatPosteComponent} from "./visiteur/list-candidat-poste/list-candidat-poste.component";
import {MatchingComponent} from "./recruteur/matching/matching.component";
import {InformerModerateurComponent} from "./Candidat/informer-moderateur/informer-moderateur.component";

const ROUTES: Routes = [
  {path: '', redirectTo: '/accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'moderateur', component: ModerateurComponent},
  {path: 'login', component: LoginComponent},
  {path: 'inscription-utilisateur/:id', component: InscriptionUtilisateurComponent},
  {path: 'addPost', component: PosteFormComponent},
  {path: 'editPost/:id', component: UpdateComponent},
  //{path: 'createCandidat', component: CreerProfileCandidatComponent},
  {path: 'editCandidat', component: UpdateProfileCandidatComponent},
  {path: 'candidat', component: DashboardCandidatComponent},
  {path: 'inscription-linkedin', component: InscriptionLinkedinComponent},
    {path: 'candidat/profile', component: ProfileCandidatComponent},
  {path: 'dashboardRecruteur', component: OffreComponent},
  {path: 'listCandidatPoste', component: ListCandidatPosteComponent},
  {path: 'matchingPost/:iddossier/:idcandidat', component: MatchingComponent},
  {path: 'candidat/signalement', component: InformerModerateurComponent}
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES);
