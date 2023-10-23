// app.js fitxategia

let express = require('express');
let app = express();


app.use(express.static('public'))


//formularioak tratatzeko middleware
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.send("Kaixo mundua!");
});

app.get('/bezeroa/:izena', function(req, res) {
    res.send("Bezeroaren izena: " + req.params.izena);
});

app.get('/bezero', function(req, res) {
    res.send(`Kaixo ${req.query.izena} ${req.query.abizena}`);
});

//Bezeroa POST
app.post("/bezeroa",function(req,res){
    res.send(`Kaixo ${req.body.izena} ${req.body.abizena}`);
})

app.listen( 3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
})
