import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { PlanService } from '../plan.service';
import { HttpClient } from '@angular/common/http';
import { Plan } from '../plan.model';
import { ActivatedRoute } from '@angular/router';
import { tap} from "rxjs/operators"
import { ModalDialogService } from 'nativescript-angular/modal-dialog';


@Component({
  selector: 'ns-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

    loadedDate: Date;
    loadedPlan: Plan;
    loadedDescription: String

    constructor(
        private router: RouterExtensions,
        public planService: PlanService,
        private http: HttpClient,
        private activateRoute: ActivatedRoute,
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef
        ) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(queryParams=> {

        this.loadedDate = queryParams.date;
        console.log(this.loadedDate)
        queryParams = null;
    });
    this.getPlan(this.loadedDate).subscribe(res => {

    //console.log("the result of getReturnPlan()" + this.planService.getReturnPlan());
    this.loadedPlan = <Plan>this.planService.getReturnPlan();

    })
    this.loadedDescription = this.planService.returnDescription;
    //console.log("This is the result of pulling text from the database " + <String>this.loadedDescription );
  }



  onEdit() {
    let navigationExtras = {
       queryParams: {date: this.loadedDate }
    }
    this.router.navigate(['./edit-plans'], navigationExtras);
  }



  onDelete() {
    this.planService.deletePlan(this.loadedDate);
    this.router.backToPreviousPage();

  }


  getPlan(date : Date) {
    const aDate = new Date(date);
    const url = "https://capstone-f1aee.firebaseio.com/plans/" + aDate.getMonth() + aDate.getDate()  +".json";
        return this.http
        .get<{date: Date ;
            description: string;
            }>(url)
            .pipe(
                tap(resData => {
                if (resData) {
                    const loadedPlan = new Plan (
                        resData.description,
                        resData.date
                    )

                   // console.log("the current plan is");


                    this.loadedPlan = loadedPlan;
                    this.loadedDescription = resData.description;
                   // this.loadedDescription.replace("\n", "'<br/>'");
                    //console.log(loadedPlan.description)
                    return loadedPlan;

                 }
                else {
                    this.loadedDescription = "Plan not created yet"
                    this.loadedPlan = null;
                 }
            })
        );
    }
}
