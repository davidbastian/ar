const path = require('path');
const imagemin = require('imagemin');
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
 
imagemin([path.join(__dirname, '../media/')+'*.jpg'], path.join(__dirname, '../dist/media/'), {
    plugins: [
        imageminJpegRecompress({
            quality:'low',
            min:30,
            max:75,
        })
    ]
}).then(() => {
    console.log('Jpeg images optimized');
});