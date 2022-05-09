const usersRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const validateForm = require('../middleware/validateForm');
const validateLogin = require('../middleware/validateLogin');

// регистрация
usersRouter.post('/reg', validateForm, async (req, res) => {
  try {
    const { email, password, login } = req.body;
    const user = await User.findOne({
      where: { email },
    });

    const userLogin = await User.findOne({
      where: { login },
    });

    if (user) {
      res.status(400).send({ error: 'Пользователь с таким email уже зарегистрирован.' });
    } else if (userLogin) {
      res.status(400).send({ error: 'Пользователь с таким именем уже зарегистрирован.' });
    } else {
      const newUser = await User.create({
        email,
        login,
        password: await bcrypt.hash(password, 10),
      });
      req.session.user = newUser;
      req.session.isAuthorized = newUser;
      res.json(newUser.id);
    }
  } catch (error) {
    console.error(error);
    res.status(400).send({ error });
  }
});

// login
usersRouter.post('/login', validateLogin, async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({
      where: { login },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      req.session.isAuthorized = user;
      res.json(user.id);
    } else {
      res.status(404).send({ error: 'Что-то пошло не так. Проверьте login и пароль' });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error });
  }
});

usersRouter.get('/session', (req, res) => {
  // console.log(req.session.user);
  if (!req.session.user) {
    res.json({});
  } else {
    const user = {
      id: req.session.user.id,
    };
    res.json(user);
  }
});

// log out
usersRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('coockie');
  res.end();
});

module.exports = usersRouter;
