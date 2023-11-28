const express = require('express');
const TemasController = require('./controllers/TemasController');
const app = express();
const puerto = 80;

app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('SiConfirmaci[on');
}
);

app.get('/temas',TemasController.indexGet);
app.get('/temas/:id',TemasController.itemGet);

app.listen(puerto, function () {
    console.log('Servidor ejecutándose en el puerto ' + puerto + '');
});






