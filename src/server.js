import express from "express";
import { veiculoRouter } from "./routes/veiculoRoutes.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/veiculo", veiculoRouter);

app.listen(port, () => {
    console.log('API rodando em http://localhost:3000');
})