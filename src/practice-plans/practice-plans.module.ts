import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { PracticePlansRoutingModule } from "./practice-plans-routing.module";
import { PracticePlansComponent } from "./practice-plans.component";
import { PlanModule } from './plan/plan.module';
import { EditPlansModule } from './edit-plans/edit-plans.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PracticePlansRoutingModule,
        EditPlansModule,
        PlanModule
    ],
    declarations: [
        PracticePlansComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PracticePlansModule { }
