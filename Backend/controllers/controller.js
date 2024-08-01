const mongoose = require('mongoose')
const newWorkout = require('../workoutSchema')

// get all worjouts

const getworkouts = async (req, res) => {
    const workouts = await newWorkout.find({}).sort({ createdDate: -1 })
    res.status(200).json(workouts)
}


// get a single workout

const getsingleworkout = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid ID format" });
    }
    else {
        const workouts = await newWorkout.findById(id)
        res.status(200).json(workouts)
    }
}

// create a workout

let create = async (req, res) => {
    console.log("post")
    const { title, reps, load } = req.body;
    try {

        const workout = await newWorkout.create({ title, load, reps })
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete a workout

let deleteworkout = async (req, res) => {
    let { id } = req.params
    console.log(req.params)
    console.log(req.body)
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid ID format" });
    }
    else {
        let deleted = await newWorkout.findOneAndDelete(id)
        res.status(200).json(deleted)
    }

}

// Update a Workout

const updateworkout = async (req, res) => {
    const { id } = req.params;

    const { title, load, reps } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }
    const updated = await newWorkout.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
    );
    if (!updated) {
        return res.status(404).json({ error: 'Workout not found' });
    }
    res.status(200).json(updated);
}

module.exports = { create, getworkouts, getsingleworkout, deleteworkout, updateworkout }