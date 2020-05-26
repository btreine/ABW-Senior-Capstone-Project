import { Component, OnInit, Input } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {ModalDialogService} from 'nativescript-angular/modal-dialog'

@Component({
    selector: "Practice Plans",
    templateUrl: "./practice-plans.component.html",
    styleUrls: ['./practice-plans.component.scss'],
    moduleId: module.id
})

export class PracticePlansComponent implements OnInit {

    weekDays=['S','M','T','W','T','F','S'];
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    days: {dayInMonth: number, dayInWeek: number }[] = [];
    currentMonth: number;
    private currentYear: number;
    previous = "Previous";


    constructor(private router: RouterExtensions) {}


    ngOnInit(): void {

        // get current year
        this.currentYear = new Date().getFullYear();

        // get current month
        this.currentMonth = new Date().getMonth();

        // get the number of days in month
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(this.currentYear, this.currentMonth, i);
            const dayInWeek = date.getDay();
            this.days.push({dayInMonth: i, dayInWeek: dayInWeek});
        }
    }


    getRow(index: number, day: {dayInMonth: number, dayInWeek: number }) {
        const startRow = 1;
        const weekRow = Math.floor(index / 7);
        const firstWeekDayInMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();

        const irregularRow = day.dayInWeek < firstWeekDayInMonth ? 1 : 0;

        return startRow + weekRow + irregularRow;

    }



    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onChangeStatus(num : number): void {

        const loadedDate = new Date(this.currentYear, this.currentMonth, num);
        let navigationExtras = {
            queryParams: {date: loadedDate}
        }
        this.router.navigate(["./plan"], navigationExtras);
    }

    onNextMonth() : void {


        if((this.currentMonth + 1) > 11) {
            this.currentMonth = 0;
            this.currentYear = this.currentYear + 1;
        } else {
            this.currentMonth = this.currentMonth + 1;
        }

        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const newDays: {dayInMonth: number, dayInWeek: number }[] = [];
        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(this.currentYear, this.currentMonth, i);
            const dayInWeek = date.getDay();
            newDays.push({dayInMonth: i, dayInWeek: dayInWeek});
        }
        this.days = newDays;


    }

    onPrevMonth() : void {
       if (( this.currentMonth - 1) <  0) {
            this.currentMonth = 11
            this.currentYear = this.currentYear - 1;
       } else {
           this.currentMonth = this.currentMonth - 1;
       }

        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        const newDays: {dayInMonth: number, dayInWeek: number }[] = [];
        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(this.currentYear, this.currentMonth, i);
            const dayInWeek = date.getDay();
            newDays.push({dayInMonth: i, dayInWeek: dayInWeek});
        }
        this.days = newDays;

    }
}
