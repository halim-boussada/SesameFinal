import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-chome",
  templateUrl: "./chome.component.html",
  styleUrls: ["./chome.component.css"],
})
export class ChomeComponent implements OnInit {
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
  endTime = new Date("december 09,2020 09:00:00").getTime();
  x = setInterval(() => {
    var now = new Date().getTime();
    var distance = this.endTime - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    this.timeleft =
      days +
      " Days " +
      hours +
      " Hours " +
      minutes +
      " Minutes " +
      seconds +
      " Seconds";
  });
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
