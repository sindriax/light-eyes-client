import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard, authLoggedGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path:"",
        redirectTo: "profile",
        pathMatch: 'full'
    },
    {
        path:"profile",
        component: ProfileComponent,
        canActivate:[authGuard]
    },
    {
        path: "auth",
        component: LoginComponent,
        canActivate:[authLoggedGuard]
    }
];
