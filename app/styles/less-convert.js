const less = require('less');
const fs = require('fs');
const path = require('path');

let lessSrc="app/styles/style.less";
less.render(fs.readFileSync(lessSrc).toString())
    .then((output) => {
            fs.writeFileSync("style.css", output.css);
        },
        (err) => {
            throw err;
        });