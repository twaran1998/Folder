const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: String,
  first_name: {
    type: String,
    default: "defualt"
  },
  last_name: {
    type: String,
    default: "defualt"
  },
  license_no: {
        type: String,
        // required: true,
        default:"default",
        // unique:true
  },
  age: {
      type: String,
      default: "0"
  },
  date_of_birth: {
    type: String,
    default: "defualt"
  },
  car_details: {
    make: {
      type: String,
      default: "defualt"
    },
    model: {
      type: String,
      default: "defualt"
    },
    year: {
      type: String,
      default: "0"
    },
    plate_no: {
      type: String,
      default: "defualt"
    }
  },
  appointment_id:{
    type: String,
  },
  test_type:{
    type: String
  },
  g2_test_comments:{
    type: String,
  },
  g_test_comments:{
    type: String,
  },
  g2_test_result:{
    type: Boolean
  },
  g_test_result:{
    type: Boolean
  }

    // g_appointment_id:{
    //   type: String,
    //   required: true,
    //   default:"default"
    // }
    
});

UserSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
