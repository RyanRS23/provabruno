import 'dotenv/config'
import rotear from './Rotas.js'
import express from 'express';

const api = express();
rotear(api);
const port = process.env.port

api.listen(port, () => console.log("Server rodando!"));