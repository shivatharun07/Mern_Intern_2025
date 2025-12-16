const mdb = require('mongoose')

const signupSchema = mdb.Schema({
    email: String,
    username: String,
    password: String
})

const signup_schema = mdb.model("signup",signupSchema)
module.exports = signup_schema;