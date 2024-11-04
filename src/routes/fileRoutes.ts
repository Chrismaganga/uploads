import { deleteFile, getFile, listFiles, uploadFile } from '../controllers/filecontroller';

import { Router } from 'express';
import { upload } from '../middleware/multerConfig';

const router = Router();

router.get('/', listFiles);
router.post('/upload', upload.single('file'), uploadFile);
router.get('/files/:filename', getFile);
router.delete('/files/:filename', deleteFile);

export default router;
