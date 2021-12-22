const path = require('path')

// default config that is overridden by the Lambda event
module.exports = {
    S3_REGION: process.env.S3_REGION,
    PGDUMP_PATH: path.join(__dirname, '../bin/postgres-13.3'),
    // maximum time allowed to connect to postgres before a timeout occurs
    PGCONNECT_TIMEOUT: 15,
    PGPASSWORD: process.env.PGPASSWORD,
    PGDATABASE: process.env.PGDATABASE,
    PGUSER: process.env.PGUSER,
    PGHOST: process.env.PGHOST,
    S3_BUCKET: process.env.S3_BUCKET,
    ROOT: process.env.ROOT,
    USE_IAM_AUTH: false
}
