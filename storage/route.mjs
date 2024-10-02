import { Router } from 'express';
import multer from 'multer';
import path, { join } from 'path';
import { NotFoundError } from '../todo/todo.exception.mjs';
import { formatResponse } from '../utils/formatResponse.mjs';
import { Files } from './file.model.mjs';
// import { pathToFileURL } from 'url';

const destination = join(process.cwd(), '/uploads');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, destination);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

export const uploadRouter = Router();

uploadRouter.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) throw new NotFoundError('File not found');

    const fileDoc = new Files();

    fileDoc.filename = req.file.filename;
    fileDoc.size = req.file.size;
    fileDoc.path = req.file.path;
    await fileDoc.save();
    res.send(formatResponse('File Uploaded', { data: fileDoc }));
  } catch (err) {
    console.error(err);
  }
});

uploadRouter.get('/:id', async (req, res) => {
  const file = await Files.findById(req.params.id);

  res.sendFile(file.path);
});
