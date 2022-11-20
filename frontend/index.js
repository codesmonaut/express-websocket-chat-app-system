const express = require(`express`);
const path = require(`path`);

// App config
const app = express();
const port = 3000;

// Middlewares
app.use(express.static(path.join(__dirname + `/public`)));

// DB config

// API endpoints
app.get(`/`, (req, res) => {
    res.sendFile(`index.html`, path.join(__dirname + `/public`));
})

// Listener
app.listen(
    port,
    console.log(`App is running on port http://localhost:${port}`)
)