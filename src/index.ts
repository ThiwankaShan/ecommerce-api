import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import productRouter from "./routes/products"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import imageRouter from "./routes/images";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const db = process.env.MONGO_URI || "mongodb://localhost:27017/express-ts";

let corsOptions = {
    origin: [process.env.CLIENT_URI || "http://localhost:5173"],
}

app.use(cors(corsOptions))

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

try {
    mongoose.connect(db);
    console.log("MongoDB is Connected...");
} catch (e) {
    console.log(e);
}

app.use(express.static('uploads'));

app.use("/product", productRouter);
app.use("/image", imageRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


