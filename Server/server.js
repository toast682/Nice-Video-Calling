const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');
// const testAPIRouter = require('./testAPI');
const PORT = process.env.PORT || 5000;
const router = require('./router.js')


// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'build')));

// app.use("/testAPI", testAPIRouter);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'))
// });

// app.get('/videocall', (req, res) => {
//     res.send('01010101');
// })

app.use(router);

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});

io.on('connection', (socket) => {
    console.log("made connection");
    socket.on('disconnect', () => {
        console.log('client disconnected')
    })
});