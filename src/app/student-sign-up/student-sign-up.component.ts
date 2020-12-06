import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { cpuUsage } from "process";
import { HttpService } from "../http.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Router } from "@angular/router";
import { url } from "inspector";
@Component({
  selector: "app-student-sign-up",
  templateUrl: "./student-sign-up.component.html",
  styleUrls: ["./student-sign-up.component.css"],
})
export class StudentSignUpComponent implements OnInit {
  imgSrc: String =
    "https://lh3.googleusercontent.com/proxy/5yS_HPdSHa0rm7NmQ974sebQ9rvOSQHpR_sMEsmgE4CGzjNaUtJrvzSLzhM5vUVQc68bT3uxWfDkHVSZksdPQJKorYABV_ie61cQ1e2vTpLpoSrF0eTiJ2Mm";
  selectedimg: any = null;
  isSubmitted: boolean;
  filepath: any;

  constructor(
    private _http: HttpService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}
  // signup(name, lastname, email, password, field, tel) {
  //   console.log(
  //     "this is your name",
  //     name,
  //     "this is your last name",
  //     lastname,
  //     "this is your email",
  //     email,
  //     "this is your password sorry",
  //     password,
  //     "this is your field",
  //     field,
  //     "this is your tel",
  //     tel
  //   );
  //   var Student = {
  //     name: name,
  //     lastname: lastname,
  //     email: email,
  //     password: password,
  //     class: field,
  //     phoneNumber: tel,
  //   };
  //   this._http.signupS(Student).subscribe((data) => {
  //     console.log("Success");
  //   });
  // }
  show(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedimg = event.target.files[0];
    } else {
      this.imgSrc =
        "https://lh3.googleusercontent.com/proxy/5yS_HPdSHa0rm7NmQ974sebQ9rvOSQHpR_sMEsmgE4CGzjNaUtJrvzSLzhM5vUVQc68bT3uxWfDkHVSZksdPQJKorYABV_ie61cQ1e2vTpLpoSrF0eTiJ2Mm";
      this.selectedimg = null;
    }
  }
  onSubmit(name, lastname, email, password, field, tel) {
    this.isSubmitted = true;
    if (!name || !lastname || !email || !password || !field || !tel) {
      alert("you should fill all the form");
    } else {
      var c = name + new Date().getTime();
      this.filepath = "UserImages/" + c;
      this.storage
        .upload(this.filepath, this.selectedimg)
        .snapshotChanges()
        .subscribe();
      var Student = {
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        class: field,
        phoneNumber: tel,
        imageUrl: c,
      };
      this._http.signupS(Student).subscribe((data) => {
        console.log("Success");
        this.router.navigateByUrl("/login/student");
      });
    }
  }
}
