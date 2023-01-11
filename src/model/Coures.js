const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String },
    description: { type: String, maxLength: 255 },
    images: { type: String, maxLength: 655 },
    slug: { type: String, slug: "name", unique: true },
    videoId: String,
    level: String,
    thumnails: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Course", Course);
