import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { EventData } from "tns-core-modules/data/observable";
import { TextView } from "tns-core-modules/ui/text-view";

import { TextField } from "tns-core-modules/ui/text-field";
import { setTimeout } from "tns-core-modules/timer";

@Component({
    selector: "Evaluations",
    templateUrl: "./evaluations.component.html",
    styleUrls: ['./evaluations.component.scss'],
})
export class EvaluationsComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
