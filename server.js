const express = require("express");

const Test = require("./classTest");

const test = new Test();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))//para cuando usemos formularios




app.get("/test", (req, res) => {
    
    res.status(200).json({persona: test.personasRandom()});

})



app.listen(8080, err =>{
    if (err) console.log(err);
    console.log('listening on port 8080');
})