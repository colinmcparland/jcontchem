import formurlencoded from "form-urlencoded";
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

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
      body: formurlencoded({
        secret: recaptcha_secret,
        response: req.body.recaptcha
      })
    }
  );

  const tokenData = await tokenQuery.json();

  if (tokenData.success) {
    const send = require("gmail-send")({
      user: "submissions@jcontchem.com",
      pass: "REPLACE_ME_WITH_GMAIL_PASSWORD",
      to: "submissions@jcontchem.com",
      subject: `New submission inquiry from ${req.body.name}`
    });

    try {
      await send({
        text: `${req.body.name} has sent a submission request.  Their email is ${req.body.email}.  You should get back to them and see what they want.`
      });

      res.status(200).send();
    } catch (err) {
      console.log(err);
      res.status(500).send();
    }
  } else {
    res.status(403).send();
  }
});

app.listen(5000, () => console.log(`Jcontchem api listening on port 5000!`));
