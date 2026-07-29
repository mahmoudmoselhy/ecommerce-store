const fs = require("fs")
const path = require("path")

const logsDir = path.join(__dirname, '../logs')

// chack if logs exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true })
}

const logger = (req , res , next)=>{

const log = `${req.method} ${req.url} ${new Date().toISOString()}\n`

    // print log in console

    // console.log(log)

    fs.appendFile(path.join(logsDir, "log.txt"), log, (err) => {
        if (err) {
            console.error("can not write in the file log", err)
        }
    })
    next()

};


module.exports = logger