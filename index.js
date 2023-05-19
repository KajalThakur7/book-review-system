const express = require("express");
const connectDB = require("./server/database/connection");
const userRoute = require("./server/router/route");
const bodyParser = require("body-parser");

const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml')

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
PORT = 5000;

///crud in mdb
connectDB();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/", userRoute);

app.listen(PORT, (req, res) => {
  console.log(`server is running on http://localhost:${PORT}`);
});
