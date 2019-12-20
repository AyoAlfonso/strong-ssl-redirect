module.exports = function ({
	env,
	status,
	www,
}) {
	const environment = env || 'production';
	const statusCode = status || 302;

	return function (req, res, next) {
		if (process.env.NODE_ENV === environment) {
			const host = req.header('host');
			if (www) {
				const correctHost = host.match(/^www\..*/i);
				if (!correctHost) {
					return res.redirect(301, `https://www.${host}`);
				}
			}

			if (req.headers['x-forwarded-proto'] !== 'https') {
				return res.redirect(statusCode, `https://${req.hostname}${req.originalUrl}`);
			}
			next();
		} else {
			next();
		}
	};
};
