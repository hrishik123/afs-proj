const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://Hrishik:123Hrishik@ecom.awllnis.mongodb.net/?retryWrites=true&w=majority&appName=ecom", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
