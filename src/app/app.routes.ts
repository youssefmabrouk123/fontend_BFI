import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MonCompteComponent } from './mon-compte/mon-compte.component';
import { NousContacterComponent } from './nous-contacter/nous-contacter.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'mon-compte' , component:MonCompteComponent},
    {path:'nous-contacter' , component:NousContacterComponent}
];
