const express = require("express");
const cors = require("cors");
const validateToken = require("./middlewares/tokenValidation");
const db = require("./models");
const app = express();
const port = process.env.PORT || 3001;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "OK",
  });
});

require("./routes/authentication")(app);

app.use(validateToken);

require("./routes/users")(app);
require("./routes/questions")(app);
require("./routes/answers")(app);
require("./routes/result_parameter")(app);
require("./routes/result_from_question")(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
