
import { EditPlansComponent } from './edit-plans.component';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core"

@NgModule ( {
    declarations: [EditPlansComponent],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild([
            {path: '', component: EditPlansComponent}
        ])
    ],
    schemas: [NO_ERRORS_SCHEMA]
    })

export class EditPlansModule {}
