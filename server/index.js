const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const formurlencoded = require("form-urlencoded");
let recaptcha_secret;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  recaptcha_secret = require("../recaptchasecret");
} catch (error) {
  recaptcha_secret = "REPLACE_ME_WITH_RECAPTHCA_SECRET";
}

app.post("/mail", async (req, res) => {
  // Verify google token
  const tokenQuery = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: formurlencoded.formurlencoded({
        secret: recaptcha_secret,
        response: req.body.recaptcha
      })
    }
  );

  console.log(
    JSON.stringify({
      secret: recaptcha_secret,
      response: req.body.recaptcha
    })
  );

  const tokenData = await tokenQuery.json();

  res.send(tokenData);

  // Send email using gmail-send
});

app.listen(5000, () => console.log(`Jcontchem api listening on port 5000!`));
