import { Route, Routes } from "@angular/router";
import { EditReportComponent } from "./views/edit-report/edit-report.component";
import { ListReportComponent } from "./views/list-report/list-report.component";


export const REPORT_ROUTES: Route[] = [
    {path: '', component: ListReportComponent}, 
    { path: 'report/:id', component: EditReportComponent }
]