import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { data } from "jquery";

@Component({
  selector: "app-student-login",
  templateUrl: "./student-login.component.html",
  styleUrls: ["./student-login.component.css"],
})
export class StudentLoginComponent implements OnInit {
  urlimage: any;
  cv: any;
  urlfile: any;
  load: any = false;
  constructor(
    private _http: HttpService,
    private local: LocalService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}
  login(email, password) {
    var obj = { email, password };
    this._http.loginStudent(obj).subscribe((data) => {
      if (data) {
        this.local.userConnectedEmail = email;
        localStorage.setItem("connected", email);
        this.router.navigateByUrl("/profile/student");
      } else {
        alert("mot de pass ou email est incorrect");
      }
    });
  }
  sign() {
    document.getElementById("id01").style.display = "block";
  }
  imgSrc: String = "../../assets/img/avatar3.png";
  selectedimg: any = null;
  isSubmitted: boolean;
  filepath: any;
  show(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedimg = event.target.files[0];
    } else {
      this.imgSrc = "../../assets/img/avatar3.png";
      this.selectedimg = null;
    }
  }
  upload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const read = new FileReader();
      read.readAsDataURL(event.target.files[0]);
      this.cv = event.target.files[0];
      var pathfile = "resumees/" + new Date().getTime();
      const fileref = this.storage.ref(pathfile);
      this.storage
        .upload(pathfile, this.cv)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileref.getDownloadURL().subscribe((url) => {
              this.urlfile = url;
              alert("cv uploaded successfully");
            });
          })
        )
        .subscribe();
    }
  }
  onSubmit(name, lastname, email, password, field, tel) {
    this.load = true;
    this.isSubmitted = true;
    if (
      !name ||
      !lastname ||
      !email ||
      !password ||
      !field ||
      !tel ||
      !this.selectedimg
    ) {
      alert("you should fill all the form");
    } else if (!this.urlfile) {
      alert("waiting for cv to get uploaded");
    } else {
      var pathimg = "UserImages/" + name + new Date().getTime();
      const imgref = this.storage.ref(pathimg);
      this.storage
        .upload(pathimg, this.selectedimg)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            imgref.getDownloadURL().subscribe((url) => {
              this.urlimage = url;

              var Student = {
                name: name,
                lastname: lastname,
                email: email,
                password: password,
                class: field,
                phoneNumber: tel,
                imageUrl: this.urlimage,
                resume: this.urlfile,
              };
              this.solution(Student);
            });
          })
        )
        .subscribe();

      // this._http.signupS(Student).subscribe((data) => {
      //
      // });
    }
  }
  solution(obj) {
    this._http.signupS(obj).subscribe((data) => {
      document.getElementById("id01").style.display = "none";
      this.load = false;
    });
  }
}
