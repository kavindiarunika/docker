import express from 'express';
import mongoose from 'mongoose';
import User from '../user.js'
import cors from 'cors';


const app= express();
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/hotelbooking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,       
}).then(() => {
    console.log('Connected to MongoDB');
}

).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
}

);

app.post("/api/users" , async(res,req)=>{

    try{

        const user = new User(req.body);
        const result =await user.save();
        res.status(201).json(result);

    }
    catch(error){
        res.statusCode(500).json({error:"internal server error"})
    }

})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}   
);


