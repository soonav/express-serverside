const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/F8_edu", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connection db!");
  } catch (e) {
    console.log("failed", e);
  }
}
module.exports = { connect };
