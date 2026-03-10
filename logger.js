const winston = require("winston")
const path = require("path")

const logPath = path.join(__dirname, "logs", "app.log")

const logger = winston.createLogger({
    level: "info",
    format: winston.format.printf(({ level, message }) => {
        return `${new Date().toISOString()} - ${level.toUpperCase()} - ${message}`
    }),
    transports: [
        new winston.transports.File({
            filename: logPath
        })
    ]
})

module.exports = logger