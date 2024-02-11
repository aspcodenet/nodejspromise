const express = require('express')
const app = express()
const port = 3000 // "Radiofrekvens"

const {myFetch} = require('./FetchFromOtherSystem')

app.get('/test',async (req,res)=>{
    console.log('now')
    let p = await  myFetch('adsadsads')
    console.log(p)
    res.status(200).json(p)
})

app.listen(port,  () => {
})

