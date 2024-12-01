
import Item from '../models/item.model';
import { error } from "console";
import {Router, Request, Response } from "express";



const router = Router();

router.post('/',async(req,res) => {
    try{
        const {name,description,price} = req.body;
        const newItem = await Item.create({name,description,price});
        res.status(201).json(newItem);
    }catch(error){
        res.status(500).json({error: 'failed to create item'});
    }

});

router.get('/',async(req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    } catch(error){
        res.status(500).json({error: 'failed to fetch items'});
    }

});

router.get('/:id', async(req,res): Promise<any> => {
    try{
        const item=await Item.findById(req.params.id);
        if(!item) return res.status(404).json({error: 'Item not found'});
        res.status(200).json(item);
    }catch(error){
        res.status(500).json({error: 'failed to fetch item'});
    }
});

router.put('/:id',async(req,res): Promise<any>=>{
    try{
        const updatedItem = await Item.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
        });
        if(!updatedItem) return res.status(404).json({error: 'Item not found'});
        res.status(200).json(updatedItem);
    }catch(error){
        res.status(500).json({error: 'failed to update item'});
    }

});

router.delete('/:id',async(req,res): Promise<any>=>{
    try{
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if(!deletedItem) return res.status(404).json({error: 'item not found'});
        res.status(200).json({message: 'item deleted successfully'});
    }catch(error){
        res.status(500).json({error: 'Failed to delete item'});
    }
});

export default router;
