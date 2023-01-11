module.exports = {
  multipleMongoToArray: (mongooses) =>
    mongooses.map((mongoose) => mongoose.toObject()),
  mongooseToObject: (mongooses) =>
    mongooses ? mongooses.toObject() : mongooses,
};
