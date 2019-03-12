const Sequelize = require('sequelize')

const sequelize = new Sequelize(
	process.env.DATABASE,
	{
		dialect: 'postgres'
	}
)

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = {
	sequelize,
	models
}
