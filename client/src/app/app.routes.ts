import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ListChecklistComponent } from './checklist/views/list-checklist/list-checklist.component';
import { ListReportComponent } from './report/views/list-report/list-report.component';
import { authGuard, authLoggedGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/auth/login/login.component';


export const routes: Routes = [
    { path: '', component: LayoutComponent, 
        children:[
            {path: '', component: ListChecklistComponent},
            {path: "checklists", loadChildren: () => 
                import('./checklist/checklist.routes')
                .then( mod => {
                    return mod.CHECKLIST_ROUTES;
                })
            },
            {path: "reports", component: ListReportComponent},
        ],
        canActivate:[authGuard]
    },
    {
        path: "auth",
        component: LoginComponent,
        canActivate:[authLoggedGuard]
    }

];
