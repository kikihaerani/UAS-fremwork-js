import express from "express";
import {
    getKelass,
    getKelasById,
    createKelass,
    updateKelass,
    deleteKelass
}from "../controllers/KelasController.js"; 


const router = express.Router();

router.get('/Kelass', getKelass);
router.get('/Kelass/:id', getKelasById);
router.post('/Kelass', createKelass);
router.patch('/Kelass/:id', updateKelass);
router.delete('/Kelas/:id', deleteKelass);

export default router;