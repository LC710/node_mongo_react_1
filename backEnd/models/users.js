import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },
    
    username:{
        type: String,
        required: true
    }
})

export const UseModel = mongoose.model("user", UserSchema);

// export default UseModel;

// module.export = UseModel;