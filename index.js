import http from "http";
import fs from "fs";

// const html = fs.readFileSync("./index.html");

// const manejador = (request, response) => {
//   console.log("Hola mundo");
//   // response.end("Hola mundo 2");
//   response.write(html);
//   response.end();
// };

const manejador = (req, res) => {
  const url = req.url;

  if (url === "/") {
    fs.readFile("./index.html", (error, html) => {
      if (error) {
        res.end(error.message);
      }

      res.write(html);
      res.end();
    });
  } else if (url === "/nosotros") {
    res.end("nosotros");
  }
};

const servidor = http.createServer(manejador);

servidor.listen(8080);
