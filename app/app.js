const less = require('less');
const fs = require('fs');

let lessSrc='./styles/style.less';
less.render(fs.readFileSync(lessSrc).toString())
    .then((output) => {
    fs.writeFileSync('./styles/style.css', output.css);
    },
        (err) => {
            throw err;
        });