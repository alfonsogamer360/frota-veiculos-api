import { Router } from "express";
import { veiculoService } from "../services/veiculoservice";

export const router = new Router();

router.get("/veiculos", async (_req, res) => {
    const veiculos = await veiculoService.getAll();
    return res.json(veiculos)
});

router.post("/veiculos", async (req,res) => {
    const veiculos = await veiculoService.create(req.body);
    return res.status(201).json(veiculos);
});
