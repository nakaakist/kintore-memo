const exec = require('child_process').exec
const config = require('../config.js')

const main = () => {
    exec(`cd frontend && npm run build && aws s3 sync build s3://${config.staticAssetsS3BucketName}`,
        (err, stdout, stderr) => {
            if (err) {
                console.log(stderr)
                return
            }   
            console.log(stdout)
        }
    )
}

main()


