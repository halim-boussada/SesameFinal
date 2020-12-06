import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { url } from "inspector";
import { Router } from "@angular/router";

@Component({
  selector: "app-thank",
  templateUrl: "./thank.component.html",
  styleUrls: ["./thank.component.css"],
})
export class ThankComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}
  timeleft: any;
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
