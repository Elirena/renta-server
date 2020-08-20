const logger = require(`./services/logger`);
const express = require(`express`);
const locationsRouter = require(`../api/locations`);
const app = express();

const DB_URL = process.env.DB_URL || `mongodb://localhost:27017`;
const DB_DATABASE_NAME = process.env.DB_DATABASE_NAME;

const {
  SERVER_HOST = `localhost`,
  SERVER_PORT = 3000,
} = process.env;

const staticDir = `${__dirname}/../static`;

const NOT_FOUND_HANDLER = (req, res) => {
 logger.warn(`Запрашиваемая страница ${req.path} не найдена`);
  res.status(404).send([{error: `Not Found Error`, errorMessage: `Страница ${req.path} не найдена!`}]);
};

app.use(express.static(staticDir));

app.get(`/api/locations`, locationsRouter);

app.use(NOT_FOUND_HANDLER);

const launchServer = ({host, port}) => {
  port = parseInt(port, 10);
  app.listen(port, host, () => {
    logger.info(`Сервер запущен по адресу: http://${host}:${port}`);
  });
};

module.exports = {
  name: `server`,
  description: `Запускает сервер.`,
  execute(port = SERVER_PORT, host = SERVER_HOST) {
    launchServer({host, port});
  },
};

