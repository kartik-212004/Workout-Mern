const express = require("express")
const { create, getworkouts, getsingleworkout, deleteworkout, updateworkout } = require('../controllers/controller.js')
const Router = express.Router();
const newWorkout = require('../workoutSchema')
// Router Get 
Router.get('/', getworkouts)

// Router Param Get 
Router.get('/:id', getsingleworkout)

// Router Post 
Router.post('/', create)

// Router Delete 
Router.delete('/:id', deleteworkout)

// Router Update 
Router.patch('/:id', updateworkout)


module.exports = Router;


