module.exports = function ({ environment, status, www }) {
    var environment = environment || 'production';
    var status = status || 302;

    return function (req, res, next) {

        if (process.env.NODE_ENV === environment) {
            var host = req.header('host');
            if (www) {
                var correctHost = host.match(/^www\..*/i);
                if (!correctHost) {
                    return res.redirect(301, 'https://www.' + host);
                }
            }

            if (req.headers['x-forwarded-proto'] != 'https') {
                console.log('the hostname is', req.hostname, 'and original Url is', req.originalUrl);
                return res.redirect(status, 'https://' + req.hostname + req.originalUrl);
            }
            else {
                next();
            }
        }
        else {
            next();
        }
    };
};