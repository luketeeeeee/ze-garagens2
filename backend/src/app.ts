import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import router from "./routes";
import log from "./utils/logger";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
const url = "http://localhost:8080/api/v1";
const port = 8080;

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use(router);

app.listen(port, () => {
  log.info(`servidor iniciado me ${url}`);
});

export default app;
