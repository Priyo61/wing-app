const mongoose = require("mongoose");
const userModel = require("./models/user");

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://priyobrata61:E8BSBCZCrWUE1zIR@cluster0.mhbfa7n.mongodb.net/wing-app"
  );
}

let allusers = [
  {
    from: "Priyo",
    to: "Brata",
    mgs: "hi there",
    created_at: new Date(),
  },
  {
    from: "john",
    to: "Adam",
    mgs: "hello world",
    created_at: new Date(),
  },
  {
    from: "bob",
    to: "joly",
    mgs: "hi how are you!",
    created_at: new Date(),
  },
];

userModel.insertMany(allusers);
