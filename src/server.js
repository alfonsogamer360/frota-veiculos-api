import { express } from "express";
import {veiculorouter} from "./routes/veiculoRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/veiculos", veiculorouter);

app.listen(port, () => {
    console.log('API rodando em http://localhost:${port}');
})