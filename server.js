const express = require("express");
const app = express();
const articlesrouter = require("./routes/articles");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Article = require("./models/article");
const methodOveeride = require("method-override");
require("dotenv/config");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(methodOveeride("_method"));

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt: "desc"
  });

  res.render("articles/index", {
    articles: articles
  });
});

app.use("/articles", articlesrouter);
app.listen(3000);
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
