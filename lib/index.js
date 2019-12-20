'use strict';

module.exports = function (_ref) {
	var env = _ref.env;
	var status = _ref.status;
	var  www = _ref.www;

	var environment = env || 'production';
	var statusCode = status || 302;

	return function (req, res, next) {
		if (process.env.NODE_ENV === environment) {
			var host = req.header('host');
			if (www) {
				var correctHost = host.match(/^www\..*/i);
				if (!correctHost) {
					return res.redirect(301, 'https://www.' + host);
				}
			}

			if (req.headers['x-forwarded-proto'] !== 'https') {
				return res.redirect(statusCode, 'https://' + req.hostname + req.originalUrl);
			}
			next();
		} else {
			next();
		}
	};
};