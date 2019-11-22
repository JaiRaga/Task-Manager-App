const express = require('express')
const User = require('../models/user')
const router = new express.Router()

// Create endpoint
router.post("/users", async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

    // user.save()
    //     .then(() => res.status(201).send(user))
    //     .catch((e) => res.status(400).send(e))
})

// Read endpoint
router.get("/users", async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.get("/users/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

// Update endpoint
router.patch("/users/:id", async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "age", "email", "password"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOperation) {
        res.status(400).send({ error: 'Invalid updates' })
    }

    // console.log(req.params, req.body, req)
    
    try {
        const user = await User.findById(_id)

        updates.forEach((update) => user[update] = req.body[update])
        await user.save()

        // const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

        if (!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
})

// Delete endpoint
router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router