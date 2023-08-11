import express from "express";
import path from "node:path";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect(
    /*  process.env.MONGODB_URL
      ? String(process.env.MONGODB_URL)
      :  */ "mongodb://localhost:27017"
  )
  .then(() => {
    const port = 3001;
    const app = express();

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.log("erro ao conectar no mongodb"));
