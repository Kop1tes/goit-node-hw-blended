const multer = require('multer');
const path = require('path');

const tempDir = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, tempDir);
    },
    filename: (req, res, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer = multer({ storage });

module.exports = upload;