const express = require("express");
const app = express();
const port = 3000;

// If Node version is below 18, uncomment the next line and install node-fetch
// const fetch = require("node-fetch");

app.get("/posts", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/comments", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");                  
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});


