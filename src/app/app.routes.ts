import { NgModel } from '@angular/forms';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component:HomeComponent}
];

@NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule{}