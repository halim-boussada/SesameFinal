import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-company-profile",
  templateUrl: "./company-profile.component.html",
  styleUrls: ["./company-profile.component.css"],
})
export class CompanyProfileComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  companyData: any;
  ngOnInit(): void {
    var user = localStorage.getItem("connected");
    this._http.companyData({ email: user }).subscribe((data) => {
      this.companyData = data[0];
    });
  }
  viewbookings() {
    this.router.navigateByUrl("/mybookings");
  }
  booknow() {
    this.router.navigateByUrl("/company");
  }
  home() {
    this.router.navigateByUrl("/home/company");
  }
  MyProfile() {
    this.router.navigateByUrl("/profile/company");
  }
}
