const CONNECTION = require("../config/conn");

const category = `create table if not exists category (
                                            category_name varchar(50) not null,
                                            category_id int(11) not null primary key
                                          )`;

CONNECTION.query(category, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  return "table created => ", result;
});

// const insertCategory = `insert into category  values('photo',1)`;

// CONNECTION.query(insertCategory, (err, result) => {
//   if (err) {
//     return console.log(err.sqlMessage);
//   }
//   return console.log("insert data =>", result);
// });
