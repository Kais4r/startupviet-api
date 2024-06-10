const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter username"],
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
  },
  isadmin: {
    type: Boolean,
    required: [true, "Is this user an admin ?"],
    default: false,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
