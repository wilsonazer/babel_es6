import express from 'express'

const app = express()

app.get('/', (req, res)=>{
    res.send("tudo funcionando")
})

app.listen(3333, ()=>{
    console.log("executando!")
})