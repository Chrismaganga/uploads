import { Request, Response } from 'express';

import fs from 'fs';
import path from 'path';

const uploadFolder = path.join(__dirname, '../../uploads');

export const listFiles = (req: Request, res: Response) => {
  fs.readdir(uploadFolder, (err, files) => {
    if (err) return res.status(500).send('Error reading files');
    res.render('index', { files });
  });
};

export const uploadFile = (req: Request, res: Response) => {
  res.redirect('/');
};

export const getFile = (req: Request, res: Response) => {
  const filePath = path.join(uploadFolder, req.params.filename);
  res.json({ path: filePath }).sendFile(filePath);
};

export const deleteFile = (req: Request, res: Response) => {
  const filePath = path.join(uploadFolder, req.params.filename);
  fs.unlink(filePath, (err) => {
    if (err) return res.status(404).json({ error: 'File not found' });
    res.redirect('/');
  });
};
