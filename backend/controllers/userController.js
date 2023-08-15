const User =require ('../models/userModel')
//const mongoose = require ('mongoose')



 //get a single user
 const getUser = async(req,res) =>{
    try {
        const { id } = req.params ;
      const userList = await User. findbyId(id)
      res.status (200).json(userList)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message});
      
    }
   }

   //Get all Users
const getUsers = async(req,res) =>{
    try {
      const userList = await User.find({})
      res.status (200).json(userList)
      
    } catch (error) {
      console.log(error.message);
      res.status (500).json ({message:error.message})
      
    }
   }

 //Create a user
  /* const createUser = async(req,res) =>{
    try {
        
      const userList = await User.create(req.body)
      res.status (200).json(userList)
      
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
      
    }
   }*/

    const createUser = async(req,res) =>{
    try {
        
      const userList = await User.create(req.body)
      userList.push({...User,id})
      res.send ('User added sucessfully')
      
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
      
    }
   }
  


//update a user /EDIT
   const updateUser = async(req, res) => {
    try {
        const {id} = req.params;
        const userList = await User.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!userList){
            res.status(404);
            throw new Error(`cannot find any product with ID ${id}`);
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}

//delete a user
const deleteUser = async(req, res) =>{
    try {
        const {id} = req.params;
        const userList = await User.findByIdAndDelete(id);
        if(!userList){
            res.status(404);
            throw new Error(`cannot find any user with ID ${id}`);
        }
        res.status(200).json(userList);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
}

module.exports = { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
  }