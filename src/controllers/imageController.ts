import { Request, Response } from 'express';

class ImageController {
    public static post(req: Request, res: Response) {
        const files = req.files;
        res.status(200).json({ files });
    }
}

export default ImageController;