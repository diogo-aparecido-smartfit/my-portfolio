require("dotenv/config");
import express from "express";
import cors from "cors";

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
// app.use(router);
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
