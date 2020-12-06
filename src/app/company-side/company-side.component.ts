import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { data } from "jquery";
import { Router } from "@angular/router";

@Component({
  selector: "app-company-side",
  templateUrl: "./company-side.component.html",
  styleUrls: ["./company-side.component.css"],
})
export class CompanySideComponent implements OnInit {
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private storage: AngularFireStorage,
    private router: Router
  ) {}
  times: any;
  date: any;
  user: any;
  company: any;
  bookedcomp: number;
  mybookedTimes: any;
  test: any;
  rooms: any;
  imageUrl: any = "";

  ngOnInit(): void {
    var user = localStorage.getItem("connected");
    var obj = { email: user };
    this._http.getcompanybymail(obj).subscribe((data) => {
      this.user = data;
      let pser = this.user[0];

      this.company = pser.name;
      this.imageUrl = pser.imageUrl;
      this._http
        .CompanyBookedTime({ companyBooked: this.company })
        .subscribe((data) => {
          this.test = data;
        });
    });
    this._http.getTimes().subscribe((data) => {
      this.times = data;
    });
  }
  Booknow(date) {
    var obj1 = { companyBooked: this.company };
    this._http.CompanyBookedTime(obj1).subscribe((data) => {
      this.test = data;

      var boli = false;
      this.test.map((element) => {
        boli = boli || element.time === date;
      });
      if (boli) {
        alert("already booked");
      } else {
        var t1 = date.slice(0, 5) + " - " + date.slice(0, 3) + "15";
        var t2 = date.slice(0, 3) + "15 - " + date.slice(0, 3) + "30";
        var t3 = date.slice(0, 3) + "30 - " + date.slice(0, 3) + "45";
        var t4 = date.slice(0, 3) + "45 - " + date.slice(9, date.length);
        this.insert(t1, t2, t3, t4);
        var obj = { time: date, companyBooked: this.company };
        this._http.postRooms(obj).subscribe((data) => {
          for (let elem of this.times) {
            if (elem.time === date) {
              var newCb = elem.companyBooked - 1;
              var obje = {
                companyBooked: newCb,
                time: date,
              };
              this._http.getupdateBookedTime(obje).subscribe((data) => {
                this.ngOnInit;
                this.router.navigateByUrl("/thankyou");
              });
            }
          }
        });
      }
    });
  }
  insert(t1, t2, t3, t4) {
    var obj1 = { valeur: t1, company: this.company };

    var obj2 = { valeur: t2, company: this.company };

    var obj3 = { valeur: t3, company: this.company };

    var obj4 = { valeur: t4, company: this.company };
    this._http.insertMin(obj1).subscribe((data) => {});
    this._http.insertMin(obj2).subscribe((data) => {});
    this._http.insertMin(obj3).subscribe((data) => {});
    this._http.insertMin(obj4).subscribe((data) => {});
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
