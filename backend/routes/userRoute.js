const express = require ('express')
const User =require ('./models/userModel')
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/userController");

const router =express .Router();

router.get('/', getUsers);

router.get('/:id', getUser);


router.post('/', createUser);

// update a user
router.put('/:id', updateUser);

// delete a user

router.delete('/:id', deleteUser);
    
 


  module. exports = router