import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    {path: '', redirectTo: '/home', pathMatch:'full'},
    { path: 'home', component: HomeComponent},
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);