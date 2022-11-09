const mongoose = require("mongoose");
const minionsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    default: "#f5e050",
  },
});

module.exports = mongoose.model("Minions", minionsSchema);
