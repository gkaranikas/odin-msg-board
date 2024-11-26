import { Router } from "express";
import { nanoid } from "nanoid";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Message Board", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", {});
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    id: nanoid(),
    text: req.body.msgText,
    user: req.body.msgUser,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/messages/:msgId", (req, res) => {
  const { msgId } = req.params;
  const msg = messages.find((elem) => elem.id === msgId);
  res.render("details", { msg: msg });
});

const messages = [
  {
    id: nanoid(),
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: nanoid(),
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

export default indexRouter;
