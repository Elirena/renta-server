const data = require('../../data/data');

const asyncFn = (fn) => (req, res, next) => fn(req, res, next).catch(next);

// const logger = require(`../../logger`);
//
// const NotFoundError = require(`../../error/not-found-error`);
// const InvalidParamError = require(`../../error/invalid-param-error`);
//
// const asyncMiddleWare = require(`./async-middle-ware`);

module.exports = (locationsRouter) => {
  locationsRouter.get('/api/locations', (req, res) => {
    res.status(200);
    return res.send({message: data.locations});
  });

  // offersRouter.get(``, asyncMiddleWare(async (req, res) => {
  //   const {limit = 20, skip = 0} = req.query;
  //
  //   logger.verbose(Object.keys(req.query).length ? `Параметры запроса: ${JSON.stringify(req.query)}` : `Параметров у запроса нет`);
  //
  //   if (isNaN(parseInt(skip, 10))) {
  //     throw new InvalidParamError(`Недопустимое значение параметра ${JSON.stringify({skip})}`);
  //   }
  //
  //   if (isNaN(parseInt(limit, 10))) {
  //     throw new InvalidParamError(`Недопустимое значение параметра ${JSON.stringify({limit})}`);
  //   }
  //   res.send(await offersRouter.offerStore.getOffersBySkipAndLimit(parseInt(skip, 10), parseInt(limit, 10)));
  // }));
  //
  // offersRouter.get(`/:date`, asyncMiddleWare(async (req, res) => {
  //   const offerDate = req.params.date;
  //   logger.verbose(`В запросе указана дата {${offerDate}}`);
  //   if (isNaN(parseInt(offerDate, 10))) {
  //     throw new InvalidParamError(`Неверный формат даты {${offerDate}}`);
  //   }
  //   const foundOffer = await offersRouter.offerStore.getOfferByDate(parseInt(offerDate, 10));
  //   if (!foundOffer) {
  //     throw new NotFoundError(`Предложений по указанной дате {${offerDate}} не найдено`);
  //   }
  //   res.send(foundOffer);
  // }));
};
