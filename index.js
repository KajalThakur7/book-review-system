const express = require("express");
const connectDB = require("./server/database/connection");
const userRoute = require("./server/router/route");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml')
// const swaggerUi = require("swagger-ui-express");
// const YAML = require('yamljs');
// const swaggerDocument = YAML.load('./swagger.yaml')
const cors = require("cors");

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const PORT = 6000;

connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // Enable CORS middleware
app.use("/", userRoute);



// Serve Swagger API documentation


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});