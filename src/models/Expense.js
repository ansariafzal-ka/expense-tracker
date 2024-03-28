const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
    item : {
        type : String,
        required :true
    },
    amount : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Expense", expenseSchema)