const http = require("http");

const port = 8001;
const hostname = "127.0.0.1";

// 127.0.0.1 == localhost
http
  .createServer((req, res) => {
    //writeHead 200이면 보여줘 아래 end 값을
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world \n");
  })
  .listen(port, hostname, () => {
    console.log(`Server Running... Port : ${port} HostName: ${hostname}`);
  });
