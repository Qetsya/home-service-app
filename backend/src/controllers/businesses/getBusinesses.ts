import { Request, Response } from "express"
const Business = require("../../schemas/Business")

export const getBusinesses = async (req: Request, res: Response) => {
    try {
        const data = await Business.find(req.body);
        res.status(200).json(data);
    } catch {
        res.status(400).json({message: "Error fetching businesses"})
    }
}
 