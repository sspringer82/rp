const fs = require('fs');
const { Transform } = require('stream');

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

const toUpperCase = new Transform({
  transform(chunk) {
    this.push(chunk.toString().toUpperCase());
  },
});

readStream.pipe(toUpperCase).pipe(writeStream);
