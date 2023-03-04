const express = require("express")
const { path } = require("express/lib/application")
const app = express()
const port = 8081



app.get("/", function(req, res){
    res.send("Home page!")
})

app.get("/contato", function(req, res){
    res.send("Pagina de contato!")
})

app.get("/empressa/:filial", function(req, res){
    res.send(req.params.filial)
})

app.get("/guilherme", function(req, res){
   res.sendFile(__dirname + "/html/index.html")
})

app.get("/produto/:item", function(req, res){
    res.send(req.params)
})

app.get("/compras/:modelo/:item", function(req,res){
    res.send("Modelo: " + req.params.modelo + " </br>" + "Item: " + req.params.item)
})




app.listen(port, function(){
    console.log("servidor ativo!")
})

