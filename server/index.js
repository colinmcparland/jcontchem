const express = require("express");
const app = express();
const http = require("http");
let recaptcha_secret;

try {
  recaptcha_secret = require("../recaptchasecret");
} catch (error) {
  recaptcha_secret = "REPLACE_ME_WITH_RECAPTHCA_SECRET";
}

app.get("/mail", async (req, res) => {
  // Verify google token
  // const verify_token = await fetch(
  //   "https://www.google.com/recaptcha/api/siteverify",
  //   {
  //     method: "POST",
  //     body: JSON.stringify({
  //       secret: recaptcha_secret,
  //       response: req.body.response
  //     })
  //   }
  // );
  res.send("yo");

  // Send email using gmail-send
});

app.listen(5000, () => console.log(`Jcontchem api listening on port 5000!`));
