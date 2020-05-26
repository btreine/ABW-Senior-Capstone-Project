import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { HttpClientModule } from "@angular/common/http";
import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';

import { YoutubePlayerModule } from 'nativescript-youtubeplayer/angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,

        YoutubePlayerModule,

        NativeScriptHttpClientModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents:  [
    ]
})
export class AppModule { }
