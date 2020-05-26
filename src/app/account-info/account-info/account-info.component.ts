import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "AccountInfo",
    templateUrl: "./account-info.component.html",
    styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit{
    // fetch user from DB

    // user is a model with array of values

    // bind values sequentailly to items in second column

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
