import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


import { EvaluationsRoutingModule } from "./evaluations-routing.module";
import { EvaluationsComponent } from "./evaluations.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        EvaluationsRoutingModule
    ],
    declarations: [
        EvaluationsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class EvaluationsModule { }
