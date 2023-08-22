import express, { Response } from "express";

const router = express.Router();

router.get("/api/v1", async (_, res: Response) => {
  res.send("api - ok");
});

export default router;
