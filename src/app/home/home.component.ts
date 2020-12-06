import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  tologinCompany() {
    this.router.navigateByUrl("/login/company");
  }
  tologinStudent() {
    this.router.navigateByUrl("/login/student");
  }
  toTeam() {
    this.router.navigateByUrl("/test/test");
  }
  home() {
    this.router.navigateByUrl("");
  }
}
