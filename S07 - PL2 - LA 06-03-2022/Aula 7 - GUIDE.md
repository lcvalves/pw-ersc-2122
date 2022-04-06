# Aula 07 Guide

Inicializar projeto node

```bash
npm init

name: aula07_api-node 
version: (1.0.0) 
description: Node.js Rest API c/ Express.
entry point: server.js
test command: 
git repository: 
keywords: 
author: bezkoder
license: (ISC)
Is this ok? (yes) yes
```

Instalar packages

`npm install install express nodemon cors dotenv morgan --save`

Adicionar script de start em`package.json`

`"start": "nodemon --experimental-json-modules server.js"`

Criar `.env`

```bash
SERVER_HOST=localhost
SERVER_PORT=3000
```

Criar `server.js`

```js
// Importar node packages
import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";

//TODO: ROUTES VÃO SER COLOCADOS AQUI!

//--REST SERVER--//
const app = express();

// Live Server CORS options
const corsOptions = {
  origin: "http://localhost:5500",
};
app.use(cors(corsOptions));

app.use(morgan("short")); // output dados de pedido HTTP

app.use(express.json()); // parse dados dos pedidos no content-type - application/json

// correr server no url host:port definido em .env
app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up and running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
```

Criar `data.json`

```json
{
    "nome": "Tiago Fernandes",
    "data_nascimento": "25/03/1999",
    "localidade": "Viana do Castelo",
    "habilit_academicas": [
        {
            "grau": "Ensino Superior",
            "instituicao": "IPVC - ESTG",
            "tipo_curso": "Licenciatura",
            "nome_curso": "ERSC",
            "ano_inicio": 2017,
            "ano_fim": 2020
        },
        {
            "grau": "Ensino Secundário",
            "instituicao": "Escola Secundária de Monserrate",
            "tipo_curso": "Científico-Humanístico",
            "nome_curso": "Ciências e Tecnologias",
            "ano_inicio": 2014,
            "ano_fim": 2017
        }
    ],
    "habilit_profissionais": ["Servente de Mesa", "Recepcionista"],
    "projetos": []
}
```

Adicionar `Router`

```js
//..imports
import fs from "fs";
import Router from "express";

//--ROUTES--//
const router = Router();

const datajson = fs.readFileSync("data.json", "utf-8"); // Read string-json from file
const data = JSON.parse(datajson); // Parse to JSON

// GET all data method route
router.get("/", (req, res) => {
  res.send(data);
});

// GET nome data method route
router.get("/nome", (req, res) => {
  res.send(data.nome);
});

// GET habilit_academicas method route
router.get("/habilit_academicas", (req, res) => {
  res.send(data.habilit_academicas);
});

// POST new data method route
router.post("/new_data", (req, res) => {
  const new_dataJSON = {
    name: req.body.name,
    data: req.body.data,
  };

  new_data = JSON.stringify(new_dataJSON); // Stringify JSON data

  fs.writeFileSync("new_data.json", new_data, "utf-8"); // Write to file

  res.send("added new data successfully!"); // status response
});
```