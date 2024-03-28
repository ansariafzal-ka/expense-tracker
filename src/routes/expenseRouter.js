const express = require("express");
const router = express.Router()

const expenseController = require("../controllers/expenseController");

router.post("/new", expenseController.createExpense)
router.get("/:id", expenseController.getEditExpense)
router.post("/delete/:id", expenseController.deleteExpense)
router.post("/edit/:id", expenseController.updateExpense)
router.get("/api/data", expenseController.sendAllExpenses)

module.exports = router;