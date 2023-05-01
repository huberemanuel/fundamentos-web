import { Request,Response, response } from "express";
import Cafezeiro from '../models/cafezeiro';

class CafezeiroController{
    async create(req:Request,res:Response){
        const {nome,cafe_id} = req.body;

        try{
            const cafezeiro = await Cafezeiro.create({nome,cafe_id});
            res.status(201).json(cafezeiro);
        }
        catch(e){
            res.status(500).json({error: "Erro ao criar café",message:e});
        }
    }

    async getAll(req: Request, res: Response){
        try{
            const cafezeiros = await Cafezeiro.find();
            res.json(cafezeiros);
        }
        catch(e){
            res.status(500).json({error: "erro ao listar usuarios",message:e});
        }
    }

    async delete(req:Request,res:Response){
        const {id} = req.params;

        try{
            const cafezeiro = await Cafezeiro.findById(id);

            if(cafezeiro){
                await Cafezeiro.findByIdAndDelete(id);
                res.sendStatus(204);
            }
            else{
                res.sendStatus(404);
            }
        }
        catch(e){
            res.status(404).json({
                error:"Erro ao Remover o Cafezeiro",
                message:e
            })
        }
    }

    async update(req:Request,res:Response){
        const {id} = req.params;
        const {nome,cafe_id} = req.body; 

        try{
            await Cafezeiro.findByIdAndUpdate(id,{nome:nome,cafe_id:cafe_id},{new: true})
                .then((cafezeiro)=>{
                    if(cafezeiro){ res.status(201).json(cafezeiro); }
                    else{ res.sendStatus(404); }
                });
        }
        catch(e){
            res.status(404).json({
                error:"Erro ao atualizar o Cafezeiro",
                message:e
            });
        }
    }
    
}

export default new CafezeiroController();