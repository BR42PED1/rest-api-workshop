import express from "express";

import apiCaller from "../util/apiCaller.js";

const router = await express.router();

router.get("/", async (req, res) => {
  try {
    const data = await apiCaller();
    const name = "Aaron";
    res.status(202).json({
      msg: data,
    });
  } catch {
    res.status(500).json({
      msg: `${name}! data get failed`,
    });
  }
});

export default router;
