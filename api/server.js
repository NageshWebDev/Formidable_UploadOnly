const express = require('express');
const formidable = require('formidable');
const path = require('path')
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/api/upload', (req, res) => {

    const form = formidable({
        multiples: false,
        encoding: 'utf-8',
        allowEmptyFiles: false,
        uploadDir: path.join(__dirname, "../my-app/src/uploads"),
        filename: (name, ext, part, form) => {
            return part.originalFilename;
        }
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.redirect('/');
        }
        console.log("File Received")
        console.log(files)
        res.redirect('/')
    });

});

app.post('/api/uploadMultiple', (req, res) => {

    const form = formidable({
        multiples: true,
        encoding: 'utf-8',
        allowEmptyFiles: false,
        uploadDir: path.join(__dirname, "../my-app/src/uploads/Multiple"),
        filename: (name, ext, part, form) => {
            return part.originalFilename;
        }
    });
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.json({ message: `${err}` })
        }
        console.log("Files Received")
        console.log(files)
        res.redirect('/')
    });

});

app.listen(8000, () => {
    console.log('Server listening on http://localhost:8000 ...');
});