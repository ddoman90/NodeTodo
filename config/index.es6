var configValues = require('./config');

module.exports = {
	getDbConnectionString : function() {
		return `mongodb://${configValues.username}:${configValues.pwd}@ds021751.mlab.com:21751/nodetododdoman`;
	}
};