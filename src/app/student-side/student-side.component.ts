import { WeekDay } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { verify } from "crypto";
import { exists } from "fs";
import { data, map } from "jquery";
import { element } from "protractor";
import { finished } from "stream";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { BrowserModule } from "@angular/platform-browser";
import Swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-student-side",
  templateUrl: "./student-side.component.html",
  styleUrls: ["./student-side.component.css"],
})
export class StudentSideComponent implements OnInit {
  rooms: any;
  companies;
  samy: any;
  mybookings: any;
  times: any;
  actualCompany: any;
  actualCompanyImg: any;
  mintimes: any;
  mytimes: any;
  userInfo: any;
  username: any;
  userimage: any;
  userResume: any;
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    var user = localStorage.getItem("connected");

    this._http.getstudentbymail({ email: user }).subscribe((data) => {
      this.userInfo = data;

      let user = this.userInfo[0];
      this.username = user.name;
      this.userimage = user.imageUrl;
      this.userResume = user.resume;
      this._http
        .getStudentime({ studentName: localStorage.getItem("connected") })
        .subscribe((data) => {
          this.mytimes = data;
        });
    });

    this._http.getCompanies().subscribe((data) => {
      this.companies = data;
    });
    this._http.getRooms().subscribe((data) => {
      this.rooms = data;
    });
    this.samy = "hhhhh";
    let obj = { studentName: localStorage.getItem("connected") };
    this._http.studentpostBookedTime(obj).subscribe((data) => {
      this.mybookings = data;
    });
  }
  display(name, img) {
    this.ngOnInit();
    this.actualCompany = name;
    this.actualCompanyImg = img;
    this._http.collectmin({ company: name }).subscribe((data) => {
      this.mintimes = data;
      document.getElementById("id01").style.display = "block";
    });
  }

  bookforS(id) {
    this.ngOnInit();
    this._http.getaffichage({ id: id }).subscribe((data) => {
      let mtable = data;
      let maffichage = mtable[0].affichage;
      let mvaleur = mtable[0].valeur;
      let mcompany = mtable[0].company;
      if (this.test1(maffichage)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "this time is full, times in red are not available",
        });
      } else if (this.test2(mvaleur)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            "Sorry you allready have a booking with this time check your bookings",
        });
      } else if (this.test3(mcompany)) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            "you allready have a reserved time with this company please check your booking times",
        });
      } else {
        var room = this.getroomid(mvaleur, this.actualCompany);
        this.update(id, maffichage - 1);
        this.booking({
          studentName: localStorage.getItem("connected"),
          time: mvaleur,
          companyBooked: this.actualCompany,
          companyImg: this.actualCompanyImg,
          roomid: room.id,
          resume: this.userResume,
          roomUrl: room.roomUrl,
        });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your booking has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        this.ngOnInit;
        document.getElementById("id01").style.display = "none";
      }
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
  vue(email) {
    localStorage.setItem("vue", email);
    this.router.navigateByUrl("/vue");
  }
  test1(maffichage) {
    if (maffichage <= 0) {
      return true;
    }
    return false;
  }
  coleur(valeur1, valeur2) {
    if (this.test1(valeur1)) {
      return "background-color:  red;";
    } else if (this.test2(valeur2)) {
      return "background-color: orange;";
    }
  }
  test2(mvaleur) {
    for (let element of this.mytimes) {
      if (element.time === mvaleur) {
        return true;
      }
    }
    return false;
  }
  test3(mcompany) {
    for (let element of this.mytimes) {
      if (element.companyBooked === mcompany) {
        return true;
      }
    }
    return false;
  }
  close() {
    document.getElementById("id01").style.display = "none";
  }

  update(val, dispo) {
    this._http.updateaff({ affichage: dispo, id: val }).subscribe((data) => {});
  }
  getroomid(temp, actualCompany) {
    var compare = temp.slice(0, 2);

    for (let element of this.rooms) {
      if (
        element.companyBooked == actualCompany &&
        element.time.slice(0, 2) == compare
      ) {
        return { id: element.id, roomUrl: element.roomUrl };
      }
    }
  }
  booking(obj) {
    this._http.studentpost(obj).subscribe((data) => {});
  }
}
