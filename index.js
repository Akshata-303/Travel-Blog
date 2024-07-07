import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { blog: null, imageUrl: null });
});

app.post("/", (req, res) => {
  const blog = req.body.blog;
  const imageUrl = req.body.imageUrl;
  res.render("index", { blog: blog, imageUrl: imageUrl });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
