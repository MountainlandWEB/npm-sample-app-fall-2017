const express = require('express');
const app = express();

app.get('/messages', function (req, res) {
    res.send([
        'Hello World',
        'This is Destany',
        'I dont know how to explain a simple route',
        'I like speaking in tongan',
        'I hate cooking'
    ]);
});
app.get('/',(req, res) => {
    res.send('This is my message app');
});

app.listen(3000);

console.log('listen on port 3000');