import * as http from "http";

const server = http.createServer((req, res) => {
  res.writeHead("200", { "content-type": "text-html" });
  
  let url = req.url;

  if (url === "/sobre") {
    res.write("<h1>Sobre</h1>");
    res.end();
  } else if (url === "/contatos") {
    res.write('<h1>Contatos</h1><br><a href="/sobre">Sobre</a><br>');
    res.end();
  } else {
    res.write('<h1>TreinaWeb</h1><br><a href="/sobre">Sobre</a><br><a href="/contatos">Contatos</a>');
    res.end();
  }
});

server.listen("3000", () => {
  console.log("Servidor iniciado na porta 3000");
});
