import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {YoutubeComponent} from './youtube/youtube.component';
import {LoginComponent} from './login/login.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'youtube/:id', component: YoutubeComponent},
  {path: 'home', component: HomeComponent}
];
