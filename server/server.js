import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Client } from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import axios from "axios";

dotenv.config();
const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send('Backend is running');
});

try {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
