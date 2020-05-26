import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AccountInfoRoutingModule } from "./account-info-routing.module";
import { AccountInfoComponent } from "./account-info/account-info.component";
//import { SetupAccountInfoComponent } from "./setup-account-info/setup-account-info.component";
import { HttpClient } from '@angular/common/http';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AccountInfoRoutingModule
    ],
    declarations: [
        AccountInfoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        HttpClient
    ]
})

export class AccountInfoModule { }
