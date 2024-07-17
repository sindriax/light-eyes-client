import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "profile/:id",
        component: ProfileComponent,
        canActivate: [authGuard],
    }
];
