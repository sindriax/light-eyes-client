import { Route, Routes } from "@angular/router";
import { CreateChecklistComponent } from "./views/create-checklist/create-checklist.component";
import { ListChecklistComponent } from "./views/list-checklist/list-checklist.component";

export const CHECKLIST_ROUTES: Route[] = [
    {path: '', component: ListChecklistComponent}, 
    {path: 'checklists', component: ListChecklistComponent}, 
    {path: "checklistGenerator", component: CreateChecklistComponent}
]