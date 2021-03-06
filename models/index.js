const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = `${process.env.DB_URL}`;
db.users = require("./user")(mongoose);
db.questions = require("./question")(mongoose);
db.answers = require("./answer")(mongoose);
db.result_parameter = require("./result_parameter")(mongoose);
db.result_from_questions = require("./result_from_question")(mongoose);

module.exports = db;
