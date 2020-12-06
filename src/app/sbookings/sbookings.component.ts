import { Component, OnInit } from "@angular/core";
import { element } from "protractor";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { url } from "inspector";
import { Router } from "@angular/router";

@Component({
  selector: "app-sbookings",
  templateUrl: "./sbookings.component.html",
  styleUrls: ["./sbookings.component.css"],
})
export class SbookingsComponent implements OnInit {
  mytimes: any;
  constructor(
    private _http: HttpService,
    private storage: AngularFireStorage,
    private local: LocalService,
    private router: Router
  ) {}
  userInfo: any;
  name: any;
  lastname: any;
  email: any;
  password: any;
  imageUrl: any;
  class: any;
  phoneNumber: any;
  user: any;
  image: string = "";
  ngOnInit(): void {
    var user = localStorage.getItem("connected");

    var obj = { email: user };
    this._http.getstudentbymail(obj).subscribe((data) => {
      this.userInfo = data;
      let user = this.userInfo[0];
      this.name = user.name;
      this.lastname = user.lastname;
      this.email = user.email;
      this.image = user.imageUrl;
      this.class = user.class;
      this.phoneNumber = user.phoneNumber;
      this._http
        .getStudentime({ studentName: localStorage.getItem("connected") })
        .subscribe((data) => {
          this.mytimes = data;
        });
    });
  }
  getdownloadFile() {
    alert("gotit");
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
