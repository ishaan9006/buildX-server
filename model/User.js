import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    apiKey: {
        type: 'String',
        required: true,
    },
    region: {
        type: 'String',
        required: true
    },
    github: {
        type: 'String',
        required: true
    },
    plan: {
        type: 'String',
        required: true
    }
});

const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    lastname: {
        type: 'String',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    
})

const User = mongoose.model('User', userSchema);

export default User;