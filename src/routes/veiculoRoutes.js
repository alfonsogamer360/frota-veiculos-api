import { Router } from 'express';
import { veiculoServices } from '../services/veiculoService.js';

export const veiculoRouter = new Router();

veiculoRouter.get("/", async (_req, res) => {
    const veiculos = await veiculoServices.getAll();
    return res.json(veiculos);
});

veiculoRouter.post("/", async (req, res) => {
    const { modelo, marca, ano, placa } = req.body;
    const veiculos = await veiculoServices.create(modelo, marca, ano, placa);
    return res.status(201).json(veiculos);
});