const express = require('express')
const app = express()
const path = require("path");
const apiRouter = require("./apiRouter.js");
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

/** Development environment. In Heroku we don't use .env file */
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
  }

const DB = require("./database.js");
const Item = require("./item.model.js");
const bodyParser = require("body-parser");

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-ov7ct.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(bodyParser.json());
app.use(apiRouter);


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

function listen(){
    app.listen(PORT, () => {
        console.log("Server started", PORT);
        console.log(`http://localhost:${PORT}`)
      });
}

mongoose.connect(DB_URL)
.then(() =>{
    console.log("database access success");
    //deleteAllItems();
    migrate();
    listen();
})
.catch( err =>{
    console.error("error happened", err);
});


//Ei tea millal koik tooted on salvestatud
function migrate() {

    Item.count({}, (err, countNr)=>{
        if(err) throw err;
        if(countNr > 0) {
            console.log("Already had items. Don't save!");
            return;
        }
        saveAllItems();
    });
}

function deleteAllItems(){
    Item.deleteMany({}, (err, doc)=>{
        console.log('err', err, "doc", doc);
    });
};

function saveAllItems(){
    console.log("Migrate started");
    const items = DB.getItems();
    items.forEach(item =>{
        const document = new Item(item);
        document.save( (err) =>{
            if(err){
                console.log(err);
                throw new Error("Something went wrong during save");
            }
            console.log('Save Success');
        })
    });
    console.log("items", items);
}