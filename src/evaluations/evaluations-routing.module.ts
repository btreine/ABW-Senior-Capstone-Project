import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { EvaluationsComponent } from "./evaluations.component";

const routes: Routes = [
    { path: "", component: EvaluationsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EvaluationsRoutingModule { }
