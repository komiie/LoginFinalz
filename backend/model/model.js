const mongoose = require("mongoose");
const RegisterSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },

  email: {
    type: String,
  },
  password: {
    type: String,
    select: false,
  },
});

module.exports = mongoose.model("User", RegisterSchema);
