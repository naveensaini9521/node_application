const express = require("express")
const router = express.Router()
const logger = require("../logger")

router.get("/", (req, res) => {

    logger.info("Users API accessed")

    res.json({
        message: "Users fetched"
    })

})

module.exports = router