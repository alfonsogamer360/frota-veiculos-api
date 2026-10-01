import { express } from "express";
import { router } from "./routes/veiculoRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/veiculos", router);

app.listen(port, () => {
    console.log('API rodando em http://localhost:${port}');
})