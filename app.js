import express from "express";
import { join } from "path";
import "dotenv/config";

import indexRouter from "./routes/indexRouter.js";

const app = express();
app.set("views", join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use("/static", express.static(join(import.meta.dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send({ a: 1, b: 2 });
// });

app.use("/", indexRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
