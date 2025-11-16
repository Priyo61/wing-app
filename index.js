const express = require("express");
const app = express();
const port = 3030;
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/user");
const methodOverride = require("method-override");

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

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/chat", async (req, res) => {
  let chats = await Chat.find();
  res.render("index.ejs", { chats });

  //res.render("index.ejs", { chats });
});

// new route:

app.get("/chat/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/chat", async (req, res) => {
  let { from, to, mgs } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    mgs: mgs,
    created_at: new Date(),
  });
  await newChat.save();
  res.redirect("/chat");
});

/// edit route:

app.get("/chat/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
});

app.put("/chat/:id", async (req, res) => {
  let { id } = req.params;
  let { mgs } = req.body;
  await Chat.findByIdAndUpdate(id, { mgs });
  res.redirect("/chat");
});

// Destroy route

app.delete("/chat/:id", async (req, res) => {
  let { id } = req.params;
  await Chat.findByIdAndDelete(id);
  res.redirect("/chat");
});

app.listen(port, () => {
  console.log("connected to server " + port);
});
