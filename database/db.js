const mongoose =require('mongoose');

const connectToDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected Succesfully');
        
    } catch (error) {
        console.error('MongoDB connection Failed');
        process.exit(1);
        
    }
}

module.exports =connectToDB;