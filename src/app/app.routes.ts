import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { AsideComponent } from './layout/aside/aside.component';
import { HeaderComponent } from './layout/header/header.component';
import { ChecklistTemplateViewComponent } from './checklist/views/checklist-list-view/checklist-list-view.component';
import { ReportsListViewComponent } from './report/views/reports-list-view/reports-list-view.component';


export const routes: Routes = [

    {path: "", component: LayoutComponent, 
        children:[
            {path: '', component: ChecklistTemplateViewComponent},
            {path: "checklists", redirectTo: ''},
            {path: "reports", component: ReportsListViewComponent},
        ]
    }

];
