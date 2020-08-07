const express = require("express");
const app = express();
const articlesrouter = require("./routes/articles");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.set("view engine", "ejs");
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description"
    },
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description"
    }
  ];
  res.render("articles/index", {
    articles: articles
  });
});

app.use("/articles", articlesrouter);
app.listen(3000);
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
