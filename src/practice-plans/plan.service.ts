import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Plan } from "./plan.model";
import {take, tap} from "rxjs/operators"
@Injectable({ providedIn: 'root' })

export class PlanService {
    private _currentPlan = new BehaviorSubject<Plan>(null);
    public returnedPlan : Plan;
    public returnDescription : string;
    constructor(private http: HttpClient) {}


    get currentPlan() {
        return this._currentPlan.asObservable();
    }

    getReturnPlan() :Plan {
        return this.returnedPlan
    }

    getReturnDescription () {
        return this.returnDescription;
    }




    createNewPlan(description: string, date: Date) {
        const newPlan = new Plan(description, date);
        this.postPut(newPlan);
        this._currentPlan.next(newPlan);
    }





    postPut(plan: Plan) {
        const aDate = new Date(plan.date);
        const url = "https://capstone-f1aee.firebaseio.com/plans/" + aDate.getMonth() + aDate.getDate()  +".json";
        console.log(url);
        //const fixedDescription = plan.description.replace(/\n/g, '<br />')
        //plan.description = fixedDescription;
        this.http.put(url, plan).subscribe(res => {
            console.log(res);
        });
    }



    deletePlan(date : Date) {
        const aDate = new Date(date);
        const url = "https://capstone-f1aee.firebaseio.com/plans/" + aDate.getMonth() + aDate.getDate()  +".json";
        this.http.delete(url).subscribe(res => {
            console.log("Plan was delete");
        })
    }
}
