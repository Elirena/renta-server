const express = require(`express`);

const defaultRoute = require(`./route-default`);

const locationsRouter = new express.Router();

defaultRoute(locationsRouter);

module.exports = locationsRouter;
