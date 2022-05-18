const CONNECTION = require("../config/conn");

const quotes_category = `create table if not exists quotes_category (
                                            quotes_category varchar(50) not null,
                                            quotes_category_id int(11) not null primary key
                                          )`;

CONNECTION.query(quotes_category, (err, result) => {
  if (err) {
    return console.log(err.message);
  }
  return "table created => ", result;
});
