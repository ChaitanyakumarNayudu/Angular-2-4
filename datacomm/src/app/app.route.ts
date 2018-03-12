import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
    { path:'', redirectTo: '/message', pathMatch: 'full'},
    { path: 'message', component: MessageComponent}

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);