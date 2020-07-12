const util = require('util')
const childProcess = require('child_process')
const exec = util.promisify(childProcess.exec)

const main = () => {
    exec(`cd frontend && npm run start`)
    .then( (err, stdout, stderr) => {
            if (err) {
                console.log(stderr)
                return
            }   
            console.log(stdout)
        }
    )
}

main()

