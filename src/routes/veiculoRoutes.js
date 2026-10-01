import { Router } from "express";
import { veiculoService } from "../services/veiculoservice";

export const veiculorouter = new Router();

veiculorouter.get("/veiculos", async (_req, res) => {
    const veiculos = await veiculoService.getAll();
    return res.json(veiculos);
});

veiculorouter.post("/veiculos", async (req,res) => {
    const veiculos = await veiculoService.create(req.body);
    return res.status(201).json(veiculos);
});
