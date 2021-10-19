exports.success = function (req, res, msg, status) {
    res.status(status || 200).send({
        error: "",
        body: msg})
}

exports.error = function (req, res, msg, status) {
    res.status(status || 500).send({
        error: msg,
        body: ""})
}

