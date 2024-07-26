import { Route, Routes } from "@angular/router";
import { ListReportComponent } from "./views/list-report/list-report.component";
import { ReportStepperComponent } from "./components/report-stepper/report-stepper.component";


export const REPORT_ROUTES: Route[] = [
    {path: '', component: ListReportComponent}, 
    { path: 'report/:id', component: ReportStepperComponent  }
]