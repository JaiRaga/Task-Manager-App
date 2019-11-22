const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const newRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const router = new express.Router()
router.get("/test", (req, res) => {
    res.send("Hello!")
})
app.use(router)

// API Creation endpoint
app.post("/users", async (req, res) => {
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

app.post("/tasks", async (req, res) => {
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

// API read endpoint
app.get("/users", async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }

    // User.find({})
    //     .then((user) => res.send(user))
    //     .catch((e) => res.status(500).send())
})

app.get("/users/:id", async (req, res) => {
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

    // User.findById(_id)
    //     .then((user) => {
    //         if (!user) {
    //             res.status(404).send()
    //         }

    //         res.send(user)
    //     })
    //     .catch((e) => res.status(500).send())
})

app.get("/tasks", async (req, res) => {
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

app.get("/tasks/:id", async (req, res) => {
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

// Update endpoint API
app.patch("/users/:id", async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ["name", "age", "email", "password"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOperation) {
        res.status(400).send({ error: 'Invalid updates' })
    }

    console.log(req.params, req.body, req)
    
    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

        if (!user) {
            res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send()
    }
})

app.patch("/tasks/:id", async (req, res) => {
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

app.delete("/users/:id", async (req, res) => {
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

app.delete("/tasks/:id", async (req, res) => {
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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
