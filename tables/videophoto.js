const CONNECTION = require("../config/conn");

const videophoto = `CREATE TABLE if not exists videophoto
                                                   (
                                                    video_photo_id INT(11) NOT NULL references category(category_id),
                                                    video_photo_link VARCHAR(1000) NOT NULL,  
                                                    photo_height VARCHAR(50),
                                                    photo_width VARCHAR(50)
                                                    ) `;

CONNECTION.query(videophoto, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  return "table created => ", result;
});

// const sql = `INSERT INTO videophoto  VALUES (0,'C:\\Users\\umiya mataji\\Pictures\\video.jpg','150px', '200px');`;

// CONNECTION.query(sql, (err, result) => {
//   if (err) {
//     return console.log(err.message);
//   }
//   return "table created => ", result;s
// });
