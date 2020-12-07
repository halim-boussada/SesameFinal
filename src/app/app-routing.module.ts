import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminSideComponent } from "./admin-side/admin-side.component";
import { HomeComponent } from "./home/home.component";
import { StudentSideComponent } from "./student-side/student-side.component";
import { StudentSignUpComponent } from "./student-sign-up/student-sign-up.component";
import { StudentLoginComponent } from "./student-login/student-login.component";
import { StudentProfileComponent } from "./student-profile/student-profile.component";
import { CompanySideComponent } from "./company-side/company-side.component";
import { CompanySignupComponent } from "./company-signup/company-signup.component";
import { CompanyLoginComponent } from "./company-login/company-login.component";
import { CompanyProfileComponent } from "./company-profile/company-profile.component";
import { CompanybookingsComponent } from "./companybookings/companybookings.component";
import { SbookingsComponent } from "./sbookings/sbookings.component";
import { from } from "rxjs";
import { StudenthomeComponent } from "./studenthome/studenthome.component";
import { ChomeComponent } from "./chome/chome.component";
import { ProCompanyComponent } from "./pro-company/pro-company.component";
import { TestTemplateComponent } from "./test-template/test-template.component";
import { ThankComponent } from "./thank/thank.component";
import { ProStudentComponent } from "./pro-student/pro-student.component";
import { TeamComponent } from "GitPush/src/app/team/team.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "company", component: CompanySideComponent },
  { path: "student", component: StudentSideComponent },
  { path: "ieedashbord", component: AdminSideComponent },
  { path: "signup/student", component: StudentSignUpComponent },
  { path: "login/student", component: StudentLoginComponent },
  { path: "profile/student", component: StudentProfileComponent },
  { path: "signup/company", component: CompanySignupComponent },
  { path: "login/company", component: CompanyLoginComponent },
  { path: "profile/company", component: CompanyProfileComponent },
  { path: "mybookings", component: CompanybookingsComponent },
  { path: "sbookings", component: SbookingsComponent },
  { path: "home/student", component: StudenthomeComponent },
  { path: "home/company", component: ChomeComponent },
  { path: "vue", component: ProCompanyComponent },
  { path: "test/test", component: TestTemplateComponent },
  { path: "thankyou", component: ThankComponent },
  { path: "vueS", component: ProStudentComponent },
  { path: "team", component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
