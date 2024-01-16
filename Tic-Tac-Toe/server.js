const ws = require('ws');

// server code
const wss = new ws.WebSocketServer({ port: 3000 });

wss.on('connection', (ws) => {

    console.log("on connection")

    ws.on('message', (data) => {
        const parsedData = JSON.parse(data);
        console.log(parsedData.action)

        if (parsedData.action === 'login') {
            createLobby(parsedData.name)
            ws.send('success');
        } else if (parsedData.action === 'set') {
            MakeMove()
        } else if (parsedData.action === 'surrender') {

        }

    });

});

function createLobby(name) {
    console.log(`created new lobby with ${name}`)
}

function startNewGame() {

}

function MakeMove() {

}

function checkIfSomeoneWon() {

}