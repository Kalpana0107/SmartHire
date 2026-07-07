const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,"uploads/");

    },
    filename: function(req, file, cb){
        const uniqueName =`${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);

    }
});

const fileFilter = (req, file, cb) =>{
    if(file.mimetype ==="application/pdf"){
        cb(null, true);
    } else{
        cb(new Error(" only PDF files are allowed"), false);

    }
};

const upload = multer({
    storage,
    fileFilter,
    limits:{
        fileSize: 5*1024*1024
    }
});

module.exports =upload;
