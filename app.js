// app.js fitxategia

let express = require('express');
let app = express();


app.use(express.static('public'))


//formularioak tratatzeko middleware
app.use(express.urlencoded({ extended: false }));



app.listen( 3000, function() {
    console.log("Zerbitzaria 3000 portuan entzuten");
})
