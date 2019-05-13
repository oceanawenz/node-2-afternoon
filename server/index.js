const express = require("express");
//create an app express application
const app = express();
//require the messages controller
const mc = require("./controllers/messages_controller");
const messagesBaseUrl = "/api/messages";


//set up body parser to have acces to req.body in endpoints
app.use(express.json());
//use express.static to serve the public/build folder
app.use(express.static( __dirname + "/../public/build"));
//create
app.post(messagesBaseUrl, mc.create);
//read
app.get(messagesBaseUrl, mc.read);
//udpate, add a url parameter of id
app.put(`${messagesBaseUrl}/:id`, mc.update);
//delete, add a url parameter of id
app.delete(`${messagesBaseUrl}/:id`, mc.delete);



//set port to a variable in case it needed to be changed and you don't have to change it in mulitple places
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

