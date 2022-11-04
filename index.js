const express = require("express");
const app = express();

// parse json here
app.use(express.json()); // this middleware every request that comes in will first go through this
// express json middleware which will conveert to body json therefore making it available

const PORT = 8080;

app.listen(PORT, () => {
  // fire up
  console.log(`it is alive on http://localhost:${PORT}`);
});
//req=>incoming data
// res =>outgoing data
app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "afga",
    size: "large",
  });
});

// :id => route params -> capture dynamic values in the URL
app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  // create new thsirt with id // we can get id from url
  const { logo } = req.body; // body not parse yet

  if (!logo) {
    res.status(418).send({ message: "We need a logo" });
  }
  res.send({
    tshirt: `your tshirt is here ${logo} and ID of ${id}`,
  });
});
