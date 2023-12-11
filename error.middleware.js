const errorResponder = (err, _req, res, _next) => {
    res.status(err.statusCode).send(`<h1>${err.message}!</h1>`)
 }

 module.exports = { errorResponder };