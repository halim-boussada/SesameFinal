const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/database.js");
const cors = require("cors");
const { data } = require("jquery");

const app = express();
app.use(cors());
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/app/useres/collectTimes", (req, res) => {
  db.collectTimes((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/app/useres/bookingTimes", (req, res) => {
  db.collectbooking((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/app/useres/collectrooms", (req, res) => {
  db.collectrooms((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/app/useres/collectcompanies", (req, res) => {
  db.collectCompanies((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/bookForcompany", (req, res) => {
  var arr = [req.body.time, req.body.companyBooked];
  db.bookForcompany(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/addTime", (req, res) => {
  var arr = [req.body.time];
  db.addTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/updateBookedTime", (req, res) => {
  var arr = [req.body.companyBooked, req.body.time];
  db.updateBookedTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// updateEL TKAIK
app.post("/app/useres/getaffichage", (req, res) => {
  var arr = [req.body.id];
  db.getaffichage(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/collectminbooking", (req, res) => {
  var arr = [req.body.company];
  db.collectminbooking(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/yourstudents", (req, res) => {
  var arr = [req.body.companyBooked];
  db.selctFromSbooked(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/getcompanybyName", (req, res) => {
  var arr = [req.body.name];
  db.getCompanybyName(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/updateaffichage", (req, res) => {
  var arr = [req.body.affichage, req.body.id];
  db.updateMinTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// end tkaik aman
app.post("/app/useres/updateroom", (req, res) => {
  var arr = [req.body.roomUrl, req.body.id];
  db.updateroom(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/CompanyBookedTime", (req, res) => {
  var arr = [req.body.companyBooked];
  console.log(arr);
  db.CompanyBookedTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// getUser by email
app.post("/app/useres/getstudentbymail", (req, res) => {
  var arr = [req.body.email];
  console.log(arr);
  db.getstudentbymail(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/getcompanybymail", (req, res) => {
  var arr = [req.body.email];
  console.log(arr);
  db.getcompanybymail(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
// end getUserBYEmAIL

app.post("/app/useres/studentverif", (req, res) => {
  var arr = [req.body.studentName];
  console.log(arr);
  db.studentverif(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/companyData", (req, res) => {
  var arr = [req.body.email];
  console.log(arr);
  db.companyData(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/studentBookedTime", (req, res) => {
  var arr = [req.body.studentName];
  db.studentBookedTime(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/collectroomsFc", (req, res) => {
  var arr = [req.body.companyBooked];
  db.collectroomsFc(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/collectroomsbyid", (req, res) => {
  var arr = [req.body.id];
  db.collectroomsFc(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/bookForStudent", (req, res) => {
  var arr = [
    req.body.studentName,
    req.body.time,
    req.body.companyBooked,
    req.body.companyImg,
    req.body.roomid,
    req.body.resume,
    req.body.roomUrl,
  ];
  db.bookForStudent(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/insertminbooked", (req, res) => {
  var arr = [req.body.valeur, req.body.company];
  db.insertminbooked(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/app/useres/signupS", (req, res) => {
  var arr = [
    req.body.name,
    req.body.lastname,
    req.body.email,
    req.body.password,
    req.body.class,
    req.body.phoneNumber,
    req.body.imageUrl,
    req.body.resume,
  ];
  db.signupS(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/signupC", (req, res) => {
  var arr = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.address,
    req.body.city,
    req.body.zip,
    req.body.imageUrl,
    req.body.phoneNumber,
    req.body.description,
    req.body.requirements,
  ];
  db.signupC(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/app/useres/singinS", (req, res) => {
  var arr = [req.body.email, req.body.password];
  db.loginStudent(arr, (err, data) => {
    if (err) throw err;
    if (data.length === 0) {
      res.send(false);
    } else if (data.length > 0) {
      res.send(true);
    }
  });
});

app.post("/app/useres/singinC", (req, res) => {
  var arr = [req.body.email, req.body.password];
  db.loginCompany(arr, (err, data) => {
    if (err) throw err;
    if (data.length === 0) {
      res.send(false);
    } else if (data.length > 0) {
      res.send(true);
    }
  });
});
app.listen(port, () => console.log(`server is listening on port ${port}`));
