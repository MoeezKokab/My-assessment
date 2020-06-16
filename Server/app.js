const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const mongoose = require('mongoose')

app.use(bodyParser.json())



require("./AppSchema")

const appSchema = mongoose.model("appSchema")

const mongooseUrl = 'mongodb+srv://User:WFbC1x8gSxt080A1@cluster0-snvvy.mongodb.net/<dbname>?retryWrites=true&w=majority'

// app.get('/', (req, res) => {
//     appSchema.find({}).then(data => {
//         res.send(data)
//         //    console.log('yes')
//     })
//         .catch(error => { console.log(error) })

// })

app.listen(3000, () => {
    console.log('server is working')
})
mongoose.connect(mongooseUrl,
    // to avoid any warning or error
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,


    })



mongoose.connection.on("connected",
    () => {
        console.log('mongoose is run') // to connect mongoose 
    })

mongoose.connection.on("error",
    (error) => {
        console.log(error)
    })

app.post('/send', (req, res) => {
    console.log(req.body)
    res.send('posted')
})

app.post('/login',(req,res)=>{
    appSchema.findOne({userID:req.body.userID,password:req.body.password})
    .then(data=>{
        if(data){console.log(data)
            res.send(data)}
            else{
                console.log("not find")
                
               res.send('not find')
            }
        
    }).catch(er=>{console.log(er)})

})

app.post('/signup',(req,res)=>{
    appSchema.findOne({userID:req.body.userID})
    .then(data=>{
        if(data){console.log(data)
            res.send(data)}
            else{
                console.log("not find")
                
               res.send('not find')
            }
        
    }).catch(er=>{console.log(er)})

})

app.get('/', (req, res) => {

    appSchema.find({}).then(data => {
       
            console.log(data)
           return res.send(data)
       
    }
    ).catch(e=>{res.send(e)})


})
app.post('/send-data', (req, res) => {
    const saveData = new appSchema({
        userID: req.body.userID,
        password: req.body.password
    })
    saveData.save()
        .then(data => {
            console.log(data)
            // res.send('success')
        })
        .catch(error => { console.log(error) })
})