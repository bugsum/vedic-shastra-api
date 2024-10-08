import { Request, Response } from 'express';
import Scripture, { IScripture } from '../models/Scripture';
import { scriptureValidationSchema } from '../validators/scriptureValidator';

export const getAllScriptures = async (req: Request, res: Response): Promise<void> => {
    try {
        const scriptures: IScripture[] = await Scripture.find();
        res.status(200).json(scriptures);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export const addScripture = async (req: Request, res: Response): Promise<void> => {
    const { error } = scriptureValidationSchema.validate(req.body);

    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
    }

    try {
        const newScripture = new Scripture(req.body);
        const scripture: IScripture = await newScripture.save();
        res.status(201).json(scripture);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add scripture' });
    }
};