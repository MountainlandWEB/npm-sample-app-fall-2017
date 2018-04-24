const less = require('less');
const fs = require('fs');
const path = require('path');

let lessSrc='./styles/style.less';
less.render(fs.readFileSync(lessSrc).toString(), { filename: path.resolve(lessSrc) })
    .then((output) => {
        console.log(output.css);
    },
        (err) => {
            throw err;
        });