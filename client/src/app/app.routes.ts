import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './core/guards/auth.guard';
import { RegisterComponent } from './core/auth/register/register.component';

export const routes: Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"profile",
        component: ProfileComponent,
        canActivate:[authGuard]
    },
    {
        path: "register",
        component: RegisterComponent
    }
];
