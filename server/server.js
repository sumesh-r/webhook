const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();


// Variables
const PORT = process.env.PORT || 8080;

morgan.token("date", function () {
  var p = new Date()
    .toString()
    .replace(/[A-Z]{3}\+/, "+")
    .split(/ /);
  return p[2] + "/" + p[1] + "/" + p[3] + ":" + p[4] + " " + p[5];
});

app.use(
  morgan(
    '":method :url" :status :res[content-length] B :response-time ms'
  )
);
app.use(express.json());

const update_image = (req, res) => {
    console.log(req.body)
    return res.status(200).json("ok")
}

// set routes
app.use("/update-image", update_image);

// listening to port
try {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}....`);
  });
} catch (error) {
  console.log(error);
}
