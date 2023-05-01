import { Request,Response, request, response } from "express";
import Cafe from '../models/cafe';

class CafeController{
    async create(req:Request,res:Response){
        const {nome} = req.body;

        try{
            const cafe = await Cafe.create({nome});
            res.status(201).json(cafe);
        }
        catch(e){
            res.status(500).json({error: "Erro ao criar café",message:e});
        }
    }

    async getAll(req:Request,res:Response){
        try{
            const cafes = await Cafe.find();
            res.json(cafes);
        }
        catch(e){
            res.status(500).json({error: "erro ao listar usuarios",message:e});
        }
    }

    async delete(req:Request,res:Response){
        const {id} = req.params;

        try{
            const cafe = await Cafe.findById(id);

            if(cafe){
                await Cafe.findByIdAndDelete(id);
                res.sendStatus(204);
            }
            else{
                res.sendStatus(404);
            }
        }
        catch(e){
            res.status(404).json({
                error:"Erro ao Remover o Cafe",
                message:e
            })
        }
    }

    async update(req:Request,res:Response){
        const {id} = req.params;
        const {nome} = req.body; 

        try{
            await Cafe.findByIdAndUpdate(id,{nome:nome},{new: true})
                .then((cafe)=>{
                    if(cafe){ res.status(201).json(cafe); }
                    else{ res.sendStatus(404); }
                });
        }
        catch(e){
            res.status(404).json({
                error:"Erro ao atualizar o Cafe",
                message:e
            });
        }
    }
}

export default new CafeController();