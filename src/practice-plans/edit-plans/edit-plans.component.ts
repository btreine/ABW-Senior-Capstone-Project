import { RouterExtensions, PageRoute } from "nativescript-angular/router";

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PlanService } from "../plan.service";



@Component({
  selector: 'ns-edit-plans',
  templateUrl: './edit-plans.component.html',
  styleUrls: ['./edit-plans.component.scss']
})
export class EditPlansComponent implements OnInit {

    loadedDate : Date;


  constructor(
      public planService : PlanService,
      private router: RouterExtensions,
      private activateRoute: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.activateRoute.queryParams.subscribe(queryParams=> {
        this.loadedDate = queryParams.date;
        console.log(this.loadedDate)
        queryParams = null;
    })

    }



  onSubmit(content: string) {
    this.planService.createNewPlan(content, this.loadedDate);
    this.router.navigate(['practice-plans'])
  }
}
