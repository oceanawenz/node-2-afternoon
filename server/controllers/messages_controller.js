let messages = [];
let id = 0;

//modules.exports exports an object.
module.exports = {
//make a create, read, update, and delete method. 
//Each method should be a function with 2 parameters, req and res.


    create: (req, res) => {
        //create will create a message using text and time off the request body
        const {text, time} = req.body;
        //push the new message object into the messages array
        messages.push({id, text, time});
        //increment id so that the previous id won't be used on other messages
        id++;
        //send the updated messages array
        res.status(200).send(messages);
    },

    read: (req, res) => {
        //read returns the entire messages array
        res.status(200).send(messages);
    },

    update: (req, res) => {
        //text value from the request body.
        const {text} = req.body;
        //id will determne which message to update based on value of id from
        //request parameters
        const updateID = req.params.id 
        //.findIndex will get index where the id's match
        const messageIndex = messages.findIndex(message => message.id == updateID)
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        //return the updated messages array
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        //delete a message using value of id from url parameters
        const deleteID = req.params.id;
        //use findIndex again with id to get the index of the message object
        messageIndex = messages.findIndex(message => message.id == deleteID)
        //then use .splice to remove it from the messages array.
        messages.splice(messageIndex, 1);
        //return the updated messages array
        res.status(200).send(messages);
    }

}
