const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const dojo = require("./routes/api/dojo");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = process.env.mongoURI || require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
	.connect(
		db,
		{useNewUrlParser: true}
	)
	.then(() => console.log("MongoDB Connected..."))
	.catch(err => console.log(err));

//Use routes
app.use("/api/dojo", dojo);

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
	//Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
