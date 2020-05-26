import { PlanComponent } from './plan/plan.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { PracticePlansComponent } from "./practice-plans.component";
import { EditPlansComponent } from "./edit-plans/edit-plans.component";

const routes: Routes = [
    { path: "", component: PracticePlansComponent },
    { path: "edit-plans", component: EditPlansComponent, outlet: 'editPlans'},
    { path: "plan", component: PlanComponent, outlet: 'plans'}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PracticePlansRoutingModule { }