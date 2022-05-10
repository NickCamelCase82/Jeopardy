const gameRoute = require('express').Router();
const {
  Animals, Football, Geography, Languages, Movies,
} = require('../db/models');

gameRoute.get('/game1', async (req, res) => {
  const game1 = await Animals.findAll({ raw: true });
  res.json(game1);
});

gameRoute.get('/game2', async (req, res) => {
  const game2 = await Football.findAll({ raw: true });
  res.json(game2);
});

gameRoute.get('/game3', async (req, res) => {
  const game3 = await Geography.findAll({ raw: true });
  res.json(game3);
});

gameRoute.get('/game4', async (req, res) => {
  const game4 = await Languages.findAll({ raw: true });
  res.json(game4);
});

gameRoute.get('/game5', async (req, res) => {
  const game5 = await Movies.findAll({ raw: true });
  res.json(game5);
});

module.exports = gameRoute;
