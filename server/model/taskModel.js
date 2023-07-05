import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
    title : {
        required : true,
        type : String,
    },
    description : {
        required : true,
        type : String,
    },
    dueDate : {
        type : Date,
        required : true,
    },
    status : {
        type: String,
        enum: ['Todo', 'In Progress', 'Done'],
        default: 'Todo',
    },
    assignedTo : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }
})

const task = mongoose.model('Task', taskSchema)

export default task