const CONNECTION = require("../config/conn");

const stricker = `create table if not exists sticker (
                                            sticker_image_link json ,
                                            sticker_id int(11) not null primary key auto_increment
                                          )`;

CONNECTION.query(stricker, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  return "table created => ", result;
});

// const insertSticker =
//   "insert into sticker values(JSON_OBJECT('funny', 'C://Users//umiya mataji//Pictures//house.jpg','Motivation', 'C://Users//umiya mataji//Pictures//house.jpg'),null)";

// CONNECTION.query(insertSticker, (err, result) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   return "insert data => ", result;
// });
