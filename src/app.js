import express from "express";
import routes from "./routes/all.js";

const app = express();

app.use(express.json());
app.use(routes);

export default app;
