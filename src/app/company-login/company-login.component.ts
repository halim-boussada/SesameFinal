import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { HttpService } from "../http.service";
import { LocalService } from "../local.service";
import { Router } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Local } from "protractor/built/driverProviders";
import Swal from "sweetalert2";
@Component({
  selector: "app-company-login",
  templateUrl: "./company-login.component.html",
  styleUrls: ["./company-login.component.css"],
})
export class CompanyLoginComponent implements OnInit {
  imgSrc: any = "../../assets/img/sesame.png";
  selectedimg: any = null;
  isSubmitted: any = false;
  urlimage: any;
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
    this._http.loginCompany(obj).subscribe((data) => {
      if (data) {
        this.local.userConnectedEmail = email;
        localStorage.setItem("connected", email);
        this.router.navigateByUrl("/profile/company");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "mot de pass ou email est incorrect",
        });
      }
    });
  }
  sign() {
    document.getElementById("id01").style.display = "block";
  }
  show(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedimg = event.target.files[0];
    } else {
      this.imgSrc =
        "https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png";
      this.selectedimg = null;
    }
  }
  signup(Cname, email, adresse, password, city, Zip, number, desc, req) {
    this.load = true;
    this.isSubmitted = true;
    if (!Cname || !email || !password || !this.selectedimg) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "champ abligatoire manquant",
      });
    } else {
      var pathimg = "logos/" + Cname + new Date().getTime();

      const imgref = this.storage.ref(pathimg);
      this.storage
        .upload(pathimg, this.selectedimg)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            imgref.getDownloadURL().subscribe((url) => {
              this.urlimage = url;

              var obj = {
                name: Cname,
                email: email,
                password: password,
                address: adresse,
                city: city,
                zip: Zip,
                imageUrl: this.urlimage,
                phoneNumber: number,
                description: desc,
                requirements: req,
              };
              this.solution(obj);
            });
          })
        )
        .subscribe();
    }
  }
  solution(obj) {
    this._http.signupC(obj).subscribe((data) => {
      this.ngOnInit();
      this.load = false;
      document.getElementById("id01").style.display = "none";
    });
  }
}
