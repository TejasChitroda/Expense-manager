const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();


// configuration

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


// For mongoose 
mongoose.connect("mongodb://127.0.0.1:27017/exp_manager1").then(() => {
    console.log("Connection to database")
}).catch((err) => {
    console.log("Connection failed!");
})




// require router
const roleRoutes = require('./routes/RoleRoutes')
const userRoutes = require('./routes/UserRoutes')
const expenseRoutes = require("./routes/ExpenseRoutes")
const expenseCategoryRoutes = require('./routes/ExpenseCategoryRoutes')

// const expenseCategorySchema = require('./models/ExpenseCategoryModel')

// user routes
app.use("/api" , roleRoutes);
app.use("/api" , userRoutes);
app.use("/api" , expenseRoutes)
app.use("/api1" , expenseCategoryRoutes);


// port
const PORT = 4000
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}.`);
})
