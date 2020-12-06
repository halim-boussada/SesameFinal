import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-pro-company",
  templateUrl: "./pro-company.component.html",
  styleUrls: ["./pro-company.component.css"],
})
export class ProCompanyComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  companyData: any;
  ngOnInit(): void {
    var user = localStorage.getItem("vue");
    this._http.companyData({ email: user }).subscribe((data) => {
      this.companyData = data[0];
    });
  }
  viewbookings() {
    this.router.navigateByUrl("/sbookings");
  }
  booknow() {
    this.router.navigateByUrl("/student");
  }
  home() {
    this.router.navigateByUrl("/home/student");
  }
  MyProfile() {
    this.router.navigateByUrl("/profile/student");
  }
}
