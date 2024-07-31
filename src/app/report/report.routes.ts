import { Route, Routes } from "@angular/router";
import { ListReportComponent } from "./views/list-report/list-report.component";
import { ReportStepperComponent } from "./components/report-stepper/report-stepper.component";
import { PreviewReportComponent } from "./views/edit-report/edit-report.component";
import { CreateReportComponent } from "./views/create-report/create-report.component";


export const REPORT_ROUTES: Route[] = [
    {path: '', component: ListReportComponent}, 
    {path: 'create', component: CreateReportComponent},
    { path: 'report/:id', component: PreviewReportComponent }
]