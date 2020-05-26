import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AccountInfoComponent } from "./account-info/account-info.component";
//import { SetupAccountInfoComponent } from "./setup-account-info/setup-account-info.component";

const routes: Routes = [
    { path: "", component: AccountInfoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class AccountInfoRoutingModule { }
