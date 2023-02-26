import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
import router from './routes.js'
app.use(router);
app.use(cors());


app.listen(3000, () => console.log("Servidor rodando na porta 3000."));

