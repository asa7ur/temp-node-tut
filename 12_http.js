const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("Welcome to our HomePage")
    }
    if(req.url === "/about"){
        res.end("This is out history")
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seen to find the page you're looking for</p>
        <a href="/">back home<a>
    `)
})

server.listen(5000)