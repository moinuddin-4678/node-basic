const express = require('express')
const app = express()

app.get('/',(req,res)=> {
    res.send("Moin")
})

app.listen('8000',()=> {
    console.log("hi")
})