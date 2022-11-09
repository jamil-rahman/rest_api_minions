const Minion = require("../model/Minion");
const express = require('express');
const router = express.Router();
//View all minions
router.get("/", async (req, res) => {
  try {
    const minions = await Minion.find();
    res.json(minions);
  } catch (error) {
    res.json({ message: error });
  }
});

//Create a minion
router.post("/", async (req, res) => {
  console.log(req.body);
  const minion = new Minion(req.body);
  try {
    const savedMinion = await minion.save();
    res.json(savedMinion);
  } catch (err) {
    res.json({ message: err });
    console.log(err);
  }
});

//update a minion
router.patch("/:minionId", async (req, res) => {
  try {
    const updatedMinion = await Minion.updateOne(
      {
        _id: req.params.minionId,
      },
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.json(updatedMinion);
  } catch (error) {
    res.json({ message: error });
  }
});

//delete a minion
router.delete("/:minionId", async (req, res) => {
  try {
    const removedMinion = await Minion.deleteOne({ _id: req.params.minionId });
    res.json(removedMinion);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;