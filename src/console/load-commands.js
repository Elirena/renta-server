const help = require(`./help`);
const server = require(`../../src/server`);
const author = require(`./author`);
const description = require(`./description`);
const license = require(`./license`);
const version = require(`./version`);

module.exports = {
  '--server': server.execute,
  '--help': help.execute,
  '--author': author.execute,
  '--description': description.execute,
  '--version': version.execute,
  '--license': license.execute,
};
