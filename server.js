const express = require("express");
const app = express();
const articlesrouter = require("./routes/articles");

app.set("view engine", "ejs");

app.use("/articles", articlesrouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: Date.now(),
      description: "Test description"
    }
  ];
  res.render("index", {
    articles: articles
  });
});

app.listen(3000);
