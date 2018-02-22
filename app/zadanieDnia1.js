let fs = require('fs');
let crypto = require('crypto');

let filePath = process.argv[2];

if (filePath === undefined) {
    console.log(`Please provide path to a file`);
    process.exit(1);
}


fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) console.log(err);
    else {
        // console.log(data);
        console.log(crypto.createHmac('sha256', data).digest('hex'));
    }
});