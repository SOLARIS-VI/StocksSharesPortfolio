const express = require("express");
const ObjectId = require("mongodb").ObjectId;

const createRouter = function (collection) {
  const router = express.Router();

  // INDEX
  router.get("/", (request, response) => {
    collection
      .find()
      .toArray()
      .then((docs) => response.json(docs))
      .catch((err) => {
        console.error(err);
        response.status(500);
        response.json({ status: 500, error: err });
      });
  });

  // SHOW
  router.get("/:id", (request, response) => {
    const id = request.params.id;
    collection
      .findOne({ _id: new ObjectId(id) })
      .then((docs) => response.json(docs))
      .catch((err) => {
        console.error(err);
        response.status(500);
        response.json({ status: 500, error: err });
      });
  });

  //CREATE
  router.post("/", (request, response) => {
    const newData = request.body;
    collection
      .insertOne(newData)
      .then((result) => {
        response.json(result);
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
        response.status(500);
        response.json({ status: 500, error: err });
      });
  });

  // DELETE
  router.delete("/:id", (request, response) => {
    const id = request.params.id;
    collection
      .deleteOne({ _id: new ObjectId(id) })
      .then((result) => {
        response.json(result);
      })
      .catch((err) => {
        console.error(err);
        response.status(500);
        response.json({ status: 500, error: err });
      });
  });

  // UPDATE
  router.put("/:id", (request, response) => {
    const id = request.body.id;
    console.log(id)
    const updatedData = request.body;
    collection
      .updateOne({ _id: new ObjectId(id) }, { $set: updatedData })
      .then((result) => {
        response.json(result);
      })
      .catch((err) => {
        console.error(err);
        response.status(500);
        response.json({ status: 500, error: err });
      });
  });
  return router;
};

module.exports = createRouter;
