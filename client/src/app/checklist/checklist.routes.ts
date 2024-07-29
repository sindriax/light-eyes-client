import { Route, Routes } from "@angular/router";
import { CreateChecklistComponent } from "./views/create-checklist/create-checklist.component";
import { ListChecklistComponent } from "./views/list-checklist/list-checklist.component";
import { ChecklistStepperComponent } from "./components/checklist-stepper/checklist-stepper.component";

export const CHECKLIST_ROUTES: Route[] = [
    {path: '', component: ListChecklistComponent}, 
    {path: "create", component: ChecklistStepperComponent}
]