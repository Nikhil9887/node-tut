const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(res);

  if (req.url == "/") {
    // res.write("This is home page");
    res.end("Welcome to our home page");
  } else if (req.url == "/about") {
    // res.write("This is about page");
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>The page you are looking for does not exist</p>
    <a href = "/" >Back home</a>`);
  }
});

server.listen(5000);
