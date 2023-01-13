import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getKelass = async (req, res) =>{
    try {
        const response = await prisma.Kelas.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getKelasById = async (req, res) =>{
    try {
        const response = await prisma.Kelas.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message});
    }
}

export const createKelass = async (req, res) =>{
    const {kelas, jam, matakuliah} = req.body;
    try {
        const Kelas = await prisma.Kelas.create({
            data:{
                kelas: kelas,
                jam: jam,
                matakuliah: matakuliah
            }
        });
        res.status(201).json(Kelas);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateKelass = async (req, res) =>{
    const {kelas, jam, matakuliah} = req.body;
    try {
        const Kelas= await prisma.Kelas.update({
            where:{
                id: Number(req.params.id)
            },
            data:{
                kelas: kelas,
                jam: jam,
                matakuliah: matakuliah
            }
        });
        res.status(200).json(Kelas);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteKelass = async (req, res) =>{
    try {
        const Kelas = await prisma.Kelas.delete({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(Kelas);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}