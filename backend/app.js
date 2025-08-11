import express from "express";

const app = express();
const port = 3000;

function logger (req, res, next){
	console.log(req.method);
	console.log(req.url);
	next();
}

app.use(logger);

app.get("/", (req, res) => {
	res.send("Home Page");
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});