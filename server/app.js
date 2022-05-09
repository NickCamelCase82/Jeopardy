require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT ?? 3001;
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const FileStore = require("session-file-store")(expressSession);
const dbConnect = require("./db/dbConnectionCheck");
// const { sequelize } = require('./db/models');
// создает файлы на сессии
const sessionConfig = {
  name: "coockie",
  store: new FileStore(),
  secret: "keyboard cat",
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: false,
};

dbConnect();

app.use(expressSession(sessionConfig));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  const accessList = ["http://localhost:3000", "http://localhost:3001"];
  const origin = req.get("origin");
  if (accessList.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Content-type");
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
});

// подключаем роутеры
// const usersRouter = require('./routes/users');

// app.use('/', usersRouter);

app.listen(PORT, async () => {
  console.log("Server is listening on a port:", PORT);
  // try {
  //   await sequelize.authenticate();
  //   console.log('DB connection succesful');
  // } catch (error) {
  //   console.log(error.message);
  // }
});
