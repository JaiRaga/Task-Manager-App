const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

// Create endpoint
router.post("/tasks", async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

    // task.save()
    //     .then(() => res.status(201).send(task))
    //     .catch((e) => res.status(400).send(e))
})

// Read endpoint
router.get("/tasks", async (req, res) => {
    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }


    // Task.find({})
    //     .then((Task) => res.send(Task))
    //     .catch((e) => console.log(e))
})

router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

    // Task.findById(_id)
    //     .then((task) => {
    //         if (!task) {
    //             return res.status(404).send()
    //         }

    //         res.send(task)
    //     })
    //     .catch((e) => res.status(500).send())
})

// Update endpoint
router.patch("/tasks/:id", async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ["description", "completed"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        res.status(400).send({ error: "Invalid Updates" })
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send()
    }
})

// Delete endpoint
router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            req.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router