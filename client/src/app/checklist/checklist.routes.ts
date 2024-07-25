import { Route, Routes } from "@angular/router";
import { CreateChecklistComponent } from "./views/create-checklist/create-checklist.component";
import { ListChecklistComponent } from "./views/list-checklist/list-checklist.component";
import { EditChecklistComponent } from "./views/edit-checklist/edit-checklist.component";

export const CHECKLIST_ROUTES: Route[] = [
    {path: '', component: ListChecklistComponent}, 
    {path: "create", component: CreateChecklistComponent},
    { path: 'check-list-item/:id', component: EditChecklistComponent }
]