exports.register = (req, res, next) => {
    res.send('register route');
}

exports.login = (req, res, next) => {
    res.send('login route');
}

exports.forgotPassword = (req, res, next) => {
    res.send('forgotPassword route');
}

exports.resetPassword = (req, res, next) => {
    res.send('resetPassword route');
}