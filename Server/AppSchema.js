const mongnoose =require('mongoose')
// create a Schema
const AppSchema = new mongnoose.Schema({
    userID:String,
    password:String,


})

mongnoose.model("appSchema",AppSchema)