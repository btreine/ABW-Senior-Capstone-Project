import { VideoComponent } from './video/video.component';
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CoachTrainingComponent } from "./coach-training.component";

const routes: Routes = [
    { path: "", component: CoachTrainingComponent },
    { path: "video", component: VideoComponent, outlet: 'videos'}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CoachTrainingRoutingModule { }
