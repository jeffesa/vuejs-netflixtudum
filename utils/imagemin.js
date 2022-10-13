// keep folder structure as input
const imagemin = require('imagemin-keep-folder');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

imagemin(['dist/**/*.{jpg,png}'], {
  plugins: [
    imageminJpegtran(),
    imageminPngquant({
      quality: [0.9, 0.95]
    })
  ],
  // replaceOutputDir: output => {
  //   return output.replace(/dist\//, 'testImages/')
  // }
});