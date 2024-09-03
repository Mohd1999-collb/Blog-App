const express = require('express');
const { getAllUsers, registerController, loginController, userInterfacecontrolle } = require('../controllers/userController');
const  Routes = express.Router();

// Routes.route('/').get((req, res)=>{
//     res.send("User is already logged in")
// })

// router.get('/', (req, res)=>{
//     res.send("User is logged in")
// })    

// Routes.route('/').get(userInterfacecontrolle);
Routes.route('/all-users').get(getAllUsers);
Routes.route('/register').post(registerController);
Routes.route('/login').post(loginController);

module.exports = Routes;