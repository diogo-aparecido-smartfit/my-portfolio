import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    const port = 3001;
    const app = express();

    app.listen(port, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("erro ao conectar no mongodb"));
