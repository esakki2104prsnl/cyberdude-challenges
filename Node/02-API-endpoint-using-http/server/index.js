const server = require("http")
const internsData = require("./data/interns.json")
const SERVER_PORT = 2002

const httpServer = server.createServer((request, response) => {
    response.write(JSON.stringify(internsData))
    response.end()
})

httpServer.listen(SERVER_PORT)
