const mysql = require("mysql");
const { register } = require("ts-node");
const { user } = require("./config.js");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

let addTime = (arr, callback) => {
  var sql = `INSERT INTO times (time) values (?)`;

  connection.query(sql, arr, (err, data) => {
    if (err) throw callback(err);
    var sql2 = "delete from bookingTimes where time=?";
    connection.query(sql2, arr, (err, data) => {
      if (err) throw callback(err);
      callback(null, data);
    });
  });
};

let collectTimes = (callback) => {
  var sql = `SELECT * FROM times`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

let collectbooking = (callback) => {
  var sql = `SELECT * FROM bookingTimes`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let collectCompanies = (callback) => {
  var sql = `SELECT * FROM companies`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};

const bookForcompany = (arr, callback) => {
  let sql = "insert into rooms (time,companyBooked) values(?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
const bookForStudent = (arr, callback) => {
  let sql =
    "insert into studentsBooked (studentName  ,time  ,companyBooked,companyImg,roomid,resume,roomUrl) values ( ?, ?, ?, ?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
const insertminbooked = (arr, callback) => {
  let sql = "INSERT INTO minbooked(valeur,company) values(?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

const signupStudent = (arr, callback) => {
  let sql = "insert into studentsBooked (studentName  ,time ) values ( ?, ?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
//start signup
const signupS = (arr, callback) => {
  let sql =
    "insert into students (name ,lastname , email , password ,  class , phoneNumber,imageUrl,resume ) values (?,?,?,?,?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
const signupC = (arr, callback) => {
  let sql =
    "insert into companies (name,email,password,address,city,zip,imageUrl,phoneNumber,description,requirements) values (?,?,?,?,?,?,?,?,?,?)";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
// endsignup

const updateBookedTime = (arr, callback) => {
  let sql = "UPDATE times SET companyBooked = ? WHERE time=?;";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
//this is Where i'm controlling the mibBooked table selecting then updating
let getaffichage = (arr, callback) => {
  let sql = `SELECT * from minbooked WHERE id=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let collectminbooking = (arr, callback) => {
  var sql = `SELECT * FROM minbooked where company=? order by valeur asc;`;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

let updateMinTime = (arr, callback) => {
  let sql = "UPDATE minbooked  SET affichage = ? WHERE id=?;";
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
// end tkaik
const updateroom = (arr, callback) => {
  let sql = "UPDATE rooms SET roomUrl = ? WHERE id=?;";
  connection.query(sql, arr, (err, data) => {
    if (err) callback(err, null);
    let sql2 = "UPDATE studentsBooked SET roomUrl = ? WHERE roomid=?;";
    connection.query(sql2, arr, (err, data) => {
      err ? callback(err, null) : callback(null, data);
    });
  });
};

let CompanyBookedTime = (arr, callback) => {
  let sql = `SELECT time from rooms WHERE companyBooked=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let studentverif = (arr, callback) => {
  let sql = `SELECT * from studentsBooked WHERE studentName=? order by time; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let selctFromSbooked = (arr, callback) => {
  let sql = `SELECT * from studentsBooked WHERE companyBooked=?`;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

let companyData = (arr, callback) => {
  let sql = `SELECT * from companies WHERE email=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let getCompanybyName = (arr, callback) => {
  let sql = `SELECT * from companies WHERE name=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let studentBookedTime = (arr, callback) => {
  let sql = `SELECT * from studentsBooked WHERE studentName=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let collectrooms = (callback) => {
  var sql = `SELECT * FROM rooms`;
  connection.query(sql, (err, data) => {
    if (err) throw callback(err);
    callback(null, data);
  });
};
let collectroomsFc = (arr, callback) => {
  var sql = `SELECT * FROM rooms WHERE companyBooked=?;`;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let collectroomsbyid = (arr, callback) => {
  var sql = `SELECT * FROM rooms WHERE id=?;`;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

// getuserbyEmail
let getstudentbymail = (arr, callback) => {
  let sql = `SELECT * from students WHERE email=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
let getcompanybymail = (arr, callback) => {
  let sql = `SELECT * from companies WHERE email=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
// Endgetuserbymail
// login
let loginStudent = (arr, callback) => {
  let sql = `SELECT * from students WHERE email=? and password=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};

let loginCompany = (arr, callback) => {
  let sql = `SELECT * from companies WHERE email=? and password=?; `;
  connection.query(sql, arr, (err, data) => {
    err ? callback(err, null) : callback(null, data);
  });
};
// endlogin

module.exports = {
  getCompanybyName,
  loginCompany,
  loginStudent,
  signupStudent,
  addTime,
  collectTimes,
  collectbooking,
  bookForcompany,
  updateBookedTime,
  CompanyBookedTime,
  updateroom,
  collectrooms,
  bookForStudent,
  studentBookedTime,
  studentverif,
  signupS,
  signupC,
  getstudentbymail,
  getcompanybymail,
  collectCompanies,
  insertminbooked,
  updateMinTime,
  collectminbooking,
  getaffichage,
  companyData,
  selctFromSbooked,
  collectroomsFc,
  collectroomsbyid,
};
