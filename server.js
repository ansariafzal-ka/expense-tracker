const express = require("express")
const app = express()

require("dotenv").config()

const connectDb = require("./src/config/mongodb")
const expenseRouter = require("./src/routes/expenseRouter")
const expenseController = require("./src/controllers/expenseController")

app.set("view engine", "ejs")
app.use(express.urlencoded({extended : true}))
app.use(express.static("public"))
app.use("/expenses", expenseRouter)

connectDb()

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server started at port ${port}`);
})

app.get("/", async (req, res) => {
    try {

        await expenseController.getAllExpenses(req, res);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});