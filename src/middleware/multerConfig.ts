import crypto from 'crypto';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'));
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, buf) => {
      if (err) throw err;
      cb(null, buf.toString('hex') + path.extname(file.originalname));
    });
  },
});

export const upload = multer({ storage });
