import { Router } from "express";
import ImageController from "../controllers/imageController";
import multer from "multer";
import path from "path";

const imageRouter = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
export const upload = multer({ storage: storage });

imageRouter.post("/", upload.array('images'), ImageController.post);

export default imageRouter;