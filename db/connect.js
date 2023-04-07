const momgoose = require("mongoose");
// uri =
//   "mongodb+srv://tom:X9QY1ES4jIaQvzq6@cluster0.b7awdpl.mongodb.net/tomdb?retryWrites=true&w=majority";

const connectDB = (uri) => {
  // console.log("first connect");
  return momgoose.connect(uri, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
