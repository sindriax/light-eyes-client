import { Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { Component } from '@angular/core';
import { ListChecklistComponent } from './checklist/views/list-checklist/list-checklist.component';
import { ReportsListViewComponent } from './layout/dashboard/views/reports-list-view/reports-list-view.component';


export const routes: Routes = [
    { path: '', component: LayoutComponent, 
        children:[
            {path: '', component: ListChecklistComponent}, 
            {path: "checklists", redirectTo: ''},
            {path: "reports", component: ReportsListViewComponent}
        ]
    }

];
