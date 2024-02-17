import express from "express";
import { Book } from '../models/Book.js';

const router = express.Router();

//CREATE new Book
router.post('/', async (req, res) => {
    console.log('<post>');
    try {
        if( !req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(400).send({message:'Fields required'})
        }
        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishYear:req.body.publishYear
        }
        const book = await Book.create( newBook );
        res.status(200).send(book);
    } catch (error) {
        console.error(error);
        return res.status(500).send( {error:error.message});
    }
})
//READ (Get)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).send({
            count: books.length, data:books
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send( {error:error.message});
    }
}).get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if(!book){
            return res.status(404).send( {message:'Book not found'});
        }
        return res.status(200).send({
            book
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send( {error:error.message});
    }
});
//UPDATE
router.put('/:id', async(req, res) => {    
    try {
        if( !req.body.title || !req.body.author || !req.body.publishYear ){
            return res.status(400).send({message:'Fields required'})
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            return res.status(404).send( {message:'Book not found'});
        }
        return res.status(200).send({message:'Book updated'});
    } catch (error) {
        console.error(error);
        return res.status(500).send( {error:error.message});
    }
});

//DELETE
router.delete('/:id', async(req, res) => {    
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id);
        if(!result){
            return res.status(404).send( {message:'Book not found'});
        }
        return res.status(200).send({message:'Book Deleted'});
    } catch (error) {
        
    }
});

export default router;