const mongoose = require("mongoose");

// const uri = "mongodb://localhost:27017/artesano";

const uri = "mongodb+srv://mateo:mateo@cluster0.yciz1.mongodb.net/artesano?retryWrites=true&w=majority";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(uri, options).then(
    () => {
        console.log("Conectado a DB");
    },
    (err) => {
        console.log(err);
    }
);

module.exports = mongoose;