const express = require("express")
const logger = require("./logger")

const users = require("./routes/users")

const app = express()

app.use(express.json())

app.use("/users", users)

app.get("/", (req, res) => {

    logger.info("Root endpoint accessed")

    res.send("Node Application Running")

})

const PORT = 3001

app.listen(PORT, () => {

    logger.info(`Server started on port ${PORT}`)

    console.log(`Server running on port ${PORT}`)

})