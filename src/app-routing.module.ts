import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
 { path: "", redirectTo: "/auth", pathMatch: "full" },
    { path: "auth", loadChildren: () => import("~/app/auth/auth.module").then((m) => m.AuthModule) },
    { path: "account-info", loadChildren: () => import("~/app/account-info/account-info.module").then((m) => m.AccountInfoModule) },
    { path: "coach-training", loadChildren: () => import("~/app/coach-training/coach-training.module").then((m) => m.CoachTrainingModule) },
    { path: "evaluations", loadChildren: () => import("~/app/evaluations/evaluations.module").then((m) => m.EvaluationsModule) },
    { path: "practice-plans", loadChildren: () => import("~/app/practice-plans/practice-plans.module").then((m) => m.PracticePlansModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "edit-plans", loadChildren: () => import("~/app/practice-plans/edit-plans/edit-plans.module").then((m) => m.EditPlansModule)},
    { path: "plan", loadChildren: () =>import("~/app/practice-plans/plan/plan.module").then((m) => m.PlanModule )},
    { path : "video", loadChildren: () =>import("~/app/coach-training/video/video.module").then((m) =>m.VideoModule) } 
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
