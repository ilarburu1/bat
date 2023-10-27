// app.js fitxategia

let express = require('express');
let app = express();


app.use(express.static('public'))


//formularioak tratatzeko middleware
app.use(express.urlencoded({ extended: false }));



app.listen( 3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
})
app.post("/bezeroa",function(req,res){
    res.send(
        "Izena: "+req.body.name+", Emaila:"+req.body.email+", Pasahitza: "+req.body.password+", Konfirmatu pasahitza: "+req.body.confirmPassword+", Generoa:"
        +req.body.gender+", Data: "+req.body.date+", Helbidea: "+req.body.address+", Herria: "+req.body.city+", Posta kodea: "+req.body.zipCode+", Kondizioak: "+req.body.conditions+" Newsletter: "+req.body.newsletter

    )
})
