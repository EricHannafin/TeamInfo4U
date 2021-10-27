const mongoose = require('mongoose');
const dbURI = "mongodb+srv://Eric1:1234@cluster0.hhhm6.mongodb.net/TeamInfo4U?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./teams');
