import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { ListChecklistComponent } from './checklist/views/list-checklist/list-checklist.component';
import { ListReportComponent } from './report/views/list-report/list-report.component';
import { authGuard, authLoggedGuard } from './core/guards/auth.guard';
import { LoginComponent } from './core/auth/login/login.component';
import { AdminViewComponent } from './admin/views/admin-view/admin-view.component';
import { adminGuard } from './core/guards/admin.guard';


export const routes: Routes = [

    { path: '', component: LayoutComponent,
        children:[
            {path: '', redirectTo: 'checklists', pathMatch: 'full'},
            {path: "checklists", loadChildren: () => 
                import('./checklist/checklist.routes')
                .then( mod => {
                    return mod.CHECKLIST_ROUTES;
                })
            },
            {path: "reports", component: ListReportComponent},
            {path: "reports", loadChildren: () => 
                import("./report/report.routes")
                .then(mod =>{
                    return mod.REPORT_ROUTES;
                })
            },
            {path: "admin", component: AdminViewComponent, canActivate: [adminGuard]}
        ],
        canActivate:[authGuard]
    },
    {
        path: "auth",
        component: LoginComponent,
        canActivate:[authLoggedGuard]
    }

];
