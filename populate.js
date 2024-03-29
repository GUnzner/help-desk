import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Ticket from "./models/Ticket.js";
import { read } from "fs";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    const jsonProducts = JSON.parse(
      await readFile(new URL("./MOCK_DATA.json", import.meta.url))
    );
    await Ticket.create(jsonProducts);
    console.log("Sucess");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
