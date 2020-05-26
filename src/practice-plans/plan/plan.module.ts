import { PlanComponent } from './plan.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core"
@NgModule ( {
    declarations: [PlanComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild([
            {path: '', component: PlanComponent}
        ])
    ],
    schemas: [NO_ERRORS_SCHEMA]
    })

export class PlanModule {}
