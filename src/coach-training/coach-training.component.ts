import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "CoachTraining",
    templateUrl: "./coach-training.component.html",
    styleUrls: ['./coach-training.component.scss'],
})
export class CoachTrainingComponent implements OnInit {

    keys = ["7ECB1uzSD9g", "UN4EpkIpVso", "mh9Qig8IIJY", "wbw6R8_GzaA", "hpNqV3EXsSI"]


    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onChangeStatus(key : String): void {
        let navigationExtras = {
            queryParams: {aKey : key}
        }
        console.log(key);
        this.router.navigate(["./video"], navigationExtras)
    }

}
