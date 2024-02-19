import express from 'express';
import mongoose from 'mongoose';
import { PORT, ATLAS_URL, CORS_ORIGIN_REACT } from './properties/config.js';
import cors from 'cors';
import bookRoute from './routes/BookRoute.js';


const app = express();


//Middleware for parsing request body
app.use( express.json() );
//Middleware fr handling CORS policy
// option 1)  Allow all origins with Default of cors (*)
app.use(cors())
// option 2) Allow Custom Origins
// app.use(
//     cors({
//         origin: CORS_ORIGIN_REACT,
//         methods:['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// )

app.get('', (req, res)=> {
    res.status(234).send('Welcome')
})


//ROUTES
app.use('/books', bookRoute);

mongoose.connect(ATLAS_URL)
    .then(()=>{
        console.log('App Successfully connected to ATLAS');
        // Once connected, start SERVER
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        })
    })
    .catch((e) => {console.error(e);})