const webfontsGenerator = require('@furkot/webfonts-generator');

webfontsGenerator({
  files: [
    'src/hurricane.svg',
    'src/cloud-rain.svg',
  ],
  dest: 'dest/',
  html:true,
  htmlPath:'dest/'
}).then(()=>{})
