import express from 'express';
const PORT = 4000;

const server = express();

server.get('/', (req, res) => {
    res.status(200).json('OK!');
});

server.listen(PORT, () => {
    console.log('Server listening in port: ' + PORT);
});
