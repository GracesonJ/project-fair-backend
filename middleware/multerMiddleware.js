const multer = require('multer')

//Disk Storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        //Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC).
        const filename = `image-${Date.now}-${file.originalname}`
        callback(null, filename)
    }
})

// fileFilter
const fileFilter = (req, file, callback) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/jpg") {
        callback(null, true)
    } else {
        callback(null, false)
        return callback(new Error(`Only png, jpg, jpeg files are allowed`))
    }
}

// multer Configuraction
const multerConfig = multer({
    storage,
    fileFilter
})

module.exports = multerConfig