const webfontsGenerator = require('@furkot/webfonts-generator');

(async () => {
    await webfontsGenerator({
        files: [
            'src/hurricane.svg',
            'src/cloud-rain.svg',
        ],
        dest: 'dest/',
        html: true,
        htmlPath: 'dest/',
        codepoints: {
            hurricane: 0xF222
        }
    })
})()
