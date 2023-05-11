var http = require("http");
var server = http.createServer((req, res) => {
  if (req.url == "/student?") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Student Page</h1>");
    res.end("student Request");
  } else if (req.url == "/admin?") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Admin Page</h1>");
    res.end("admin Request");
  } else {
    res.end("Invalid Request");
  }
});
server.listen(3000);
console.log("server is listening in port 3000...");
