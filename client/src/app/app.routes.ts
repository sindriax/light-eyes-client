import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { Component } from '@angular/core';
import { ListChecklistComponent } from './checklist/views/list-checklist/list-checklist.component';
import { ListReportComponent } from './report/views/list-report/list-report.component';


export const routes: Routes = [
    { path: '', component: LayoutComponent, 
        children:[
            {path: '', component: ListChecklistComponent}, 
            {path: "checklists", redirectTo: ''},
            {path: "reports", component: ListReportComponent}
        ]
    }

];
