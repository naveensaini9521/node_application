const { faker } = require("@faker-js/faker")
const logger = require("./logger")

const levels = ["info", "warn", "error", "debug"]

function generateLog() {

    const level = levels[Math.floor(Math.random() * levels.length)]

    const message =
        faker.internet.httpMethod() +
        " " +
        faker.internet.url() +
        " " +
        faker.system.commonFileType()

    if (level === "error") {
        logger.error(message)
    }
    else if (level === "warn") {
        logger.warn(message)
    }
    else if (level === "debug") {
        logger.debug(message)
    }
    else {
        logger.info(message)
    }
}

function startGenerator() {

    console.log("Fake log generator started")

    setInterval(() => {

        generateLog()

    }, 1000)

}

startGenerator()