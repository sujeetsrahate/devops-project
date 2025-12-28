const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

app.listen(8080, () => {
  console.log("Backend running on port 8080");
});
