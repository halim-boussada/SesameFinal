import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-admin-side",
  templateUrl: "./admin-side.component.html",
  styleUrls: ["./admin-side.component.css"],
})
export class AdminSideComponent implements OnInit {
  constructor(private _http: HttpService) {}
  times: any;
  select: any;
  rooms: any;
  number: number;
  room: string;
  ngOnInit(): void {
    this._http.getTimes().subscribe((data) => {
      this.times = data;
    });
    this._http.getRooms().subscribe((data) => {
      this.rooms = data;
      console.log("samy gj", data);
    });
    this._http.getBooking().subscribe((data) => {
      this.select = data;
    });
  }

  submitTime(data) {
    var obj = { time: data };
    this._http.postTimes(obj).subscribe((data) => {
      this.ngOnInit();
      alert("succes");
    });
  }
  addUrl(numero) {
    this.room = prompt("Type here");
    var id = parseInt(numero);
    var objec = { roomUrl: this.room, id: id };

    this._http.postRoom(objec).subscribe((data) => {
      console.log("changed");
      this.ngOnInit();
    });
  }
}
