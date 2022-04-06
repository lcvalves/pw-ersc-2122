import "dotenv/config";
import fs from "fs";
import cors from "cors";
import Router from "express";
import express from "express";
import morgan from "morgan";

const datajson = fs.readFileSync("data.json", "utf-8");
const data = JSON.parse(datajson);

// ROUTES

const router = Router();

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
    name: "Luís Alves",
    data: "dados",
  };

  const new_data = JSON.stringify(new_dataJSON);

  fs.writeFileSync("new_data.json", new_data, "utf-8");

  res.send("added new data successfully!");
});

//--REST SERVER--//
const app = express();
const corsOptions = {
  origin: "http://localhost:5500",
};

app.use(cors(corsOptions));
app.use(morgan("short"));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
  console.log(
    "Server up and running at http://%s:%s",
    process.env.SERVER_HOST,
    process.env.SERVER_PORT
  );
});
