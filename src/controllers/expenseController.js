const Expense = require("../models/Expense")

const expenseController = {
    getAllExpenses : async (req, res) => {
        try{
            const expenses = await Expense.find()
            res.render("index", {expenses : expenses })
        }catch(error){
            res.status(500).json({message : error.message})
        }
    },
    sendAllExpenses : async (req, res) =>{
        try{
            const expenses = await Expense.find()
            res.json(expenses)
        }catch(error){
            res.status(500).json({message : error.message})
        }
    },
    getEditExpense : async (req, res) => {
        try{
            const expense = await Expense.findById(req.params.id)
            res.render("edit", {expense : expense})
        }catch(error){
            res.status(500).json({message : error.message})
        }
    },
    createExpense : async (req, res) => {
        try{
            const {item, amount, description} = req.body
            await Expense.create({
                item : item,
                amount : amount,
                description : description
            })
            console.log("Expense added");
            res.redirect("/")
        }catch(error){
            res.status(500).json({message : error.message})
        }
    },
    deleteExpense : async (req, res) => {
        try{
            await Expense.findByIdAndDelete(req.params.id)
            console.log("deleted")
            res.redirect("/")
        }catch(error){
            res.status(500).json({message : error.message})
        }
    },
    updateExpense : async (req, res) => {
        try{
            const {item, amount, description} = req.body
            await Expense.findByIdAndUpdate(req.params.id, {
                item : item,
                amount : amount,
                description : description
            })
            res.redirect("/")
        }catch(error){
            res.status(500).json({message : error.message})
        }
    }
}

module.exports = expenseController