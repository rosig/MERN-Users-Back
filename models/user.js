const mongoose = require("../database");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  occupation: {
    type: String,
    require: true
  },
  created: {
    type: Date,
    default: Date.now,
    require: true
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
