const CONNECTION = require("../config/conn");

const quotes = `create table if not exists quotes(
                            quotes_id int not null primary key auto_increment,
                            quotes_text varchar(500),
                            quotes_category_name varchar(50),
                            category_id int(11) not null,
                            constraint fk_category foreign key(category_id) references category(category_id)
)`;

CONNECTION.query(quotes, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  return "create table =>", result;
});

// const insertQuotes = `insert into quotes values(null,' worth-ful video in life','quotes for video',0)`;

// CONNECTION.query(insertQuotes, (err, result) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   return console.log("insert data =>", result);
// });
