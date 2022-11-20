const express = require(`express`);
const WebSocket = require(`ws`);

// App config
const app = express();
const port = 3030;

// Middlewares

// DB config

// API endpoints
app.get(`/`, (req, res) => {
    res.status(200).send(`WebSocket Server`);
})

// Listener
const wss = new WebSocket.Server({
    server: app.listen(port),
    host: `localhost`,
});

// Sockets
wss.on(`connection`, (ws) => {
    // This code gets triggered whenever a client connects to the server
    ws.send(`Welcome, New Client.`);

    ws.on(`message`, (msg, isBinary) => {
        // This code gets triggered whenever the server recieves a message from a client
        ws.send(`Your message is: ${msg}`);

        wss.clients.forEach(client => {

            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(msg, { binary: isBinary });
            }
        })
    })
})
