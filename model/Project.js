import mongoose from 'mongoose';
import User from './User.js';

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
    },
    id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Project = mongoose.model('Project', projectSchema);

export default Project;