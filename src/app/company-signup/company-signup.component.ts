import { Component, OnInit } from "@angular/core";
import { Console } from "console";
import { HttpService } from "../http.service";
import { AngularFireStorage } from "@angular/fire/storage";
import { Router } from "@angular/router";
import { finalize } from "rxjs/operators";
import { url } from "inspector";

@Component({
  selector: "app-company-signup",
  templateUrl: "./company-signup.component.html",
  styleUrls: ["./company-signup.component.css"],
})
export class CompanySignupComponent implements OnInit {
  imgSrc: any =
    "https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png";
  selectedimg: any = null;
  isSubmitted: any = false;
  urlimage: any;
  constructor(
    private _http: HttpService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {}
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
  signup(Cname, email, adresse, password, city, Zip) {
    this.isSubmitted = true;
    if (!Cname || !email || !password || !this.selectedimg) {
      alert("champ abligatoire manquant");
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
              console.log(url);
              var obj = {
                name: Cname,
                email: email,
                password: password,
                address: adresse,
                city: city,
                zip: Zip,
                imageUrl: this.urlimage,
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
      console.log("success");
      document.getElementById("id01").style.display = "none";
      this.ngOnInit();
    });
  }

  // this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
  //   finalize(() => {
  //     fileRef.getDownloadURL().subscribe((url) => {
  //       formValue['imageUrl'] = url;
  //       this.service.insertImageDetails(formValue);
  //       this.resetForm();
  //     })
  //   })
  // ).subscribe();
}
