const http = require('http');

// Reactive web server
http.
    createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }).
    listen(4000);

// Imperative web server. Just a thought experiment, don't run this
// code in production please :)
run().catch(error => console.error(error.stack));

async function run() {
    const server = http.createServer().listen(4004);
    // Convert reactive (listening to an event stream) to imperative (calling
    // a function that returns a promise and awaiting on it)
    const next = () => new Promise(resolve => {
        server.on('request', (req, res) => resolve({ req, res }));
    });

    while (true) {
        const { res } = await next();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World, Imperative\n');
    }
};