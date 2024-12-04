import { Router } from "express";
//import { nanoid } from "nanoid";
import * as db from "../db/queries.js";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  res.render("index", {
    title: "Message Board",
    messages: await db.getAllMessages(),
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", {});
});

indexRouter.post("/new", async (req, res) => {
  await db.addMessage({
    //    id: nanoid(),
    body: req.body.msgText,
    username: req.body.msgUser,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/messages/:msgId", async (req, res) => {
  const { msgId } = req.params;
  const msg = await db.getMessage(msgId);
  //TODO: msg may be falsy
  res.render("details", { msg: msg });
});

export default indexRouter;
