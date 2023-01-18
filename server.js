const express = require("express");
const app = express()
const server = require("http").Server(app)
const lgaList = require("./lga");
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get("/", (req, res) => {
    try{
        const state = req.query.state;
        for (let index = 0; index < Object.keys(lgaList).length; index++) {
            //res.status(200).json({Object.values(lgaList.lgaList[state])});
            res.send(Object.values(lgaList.lgaList[state]));
        } 
    }catch (err){
        res.send("Error: Inavalid state name");
    }
});

app.get("/fetch", (req, res) => {
    try{
        for (let index = 0; index < Object.keys(lgaList).length; index++) {
            //res.status(200).json({Object.values(lgaList.lgaList[state])});
            res.send(Object.keys(lgaList.lgaList));
        } 
    }catch (err){
        res.send("Error: Inavalid parameter");
    }
});


app.use((req, res) => {
    res.status(404);
});
server.listen(process.env.PORT || 3030);