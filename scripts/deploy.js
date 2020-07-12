const exec = require('child_process').exec
const config = require('../config.js')

const main = () => {
    exec(`sam deploy --template-file cloudformation.yaml --stack-name ${config.stackName} --s3-bucket ${config.artifactsS3BucketName} --region ${config.region} --capabilities CAPABILITY_IAM --parameter-overrides StaticAssetsS3BucketName="${config.staticAssetsS3BucketName}" `,
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


