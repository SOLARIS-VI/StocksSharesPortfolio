const express = require("express");
const app = express();
const cors = require("cors");

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router");

app.use(express.json());
app.use(cors());

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("shares");
    const sharesCollection = db.collection("shares");
    const sharesRouter = createRouter(sharesCollection);
    app.use("/api/shares", sharesRouter);
  })
  .catch(console.error);

MongoClient.connect("mongodb://localhost:27017", { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db("portfolio");
    const portfolioCollection = db.collection("portfolio");
    const portfolioRouter = createRouter(portfolioCollection);
    app.use("/api/portfolio", portfolioRouter);
  })
  .catch(console.error);

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});
