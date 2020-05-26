import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CoachTrainingRoutingModule } from "./coach-training-routing.module";
import { CoachTrainingComponent } from "./coach-training.component";
/**import {YoutubePlayerModule} from "nativescript-youtubeplayer/angular";*/

import { VideoModule } from "./video/video.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CoachTrainingRoutingModule,
        /**YoutubePlayerModule,*/
        VideoModule
    ],
    declarations: [
        CoachTrainingComponent,

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CoachTrainingModule { }
