/*
OS
PATH
HTTP
FS
*/

const os = require('os')

const user = os.userInfo()
console.log(user,os.uptime(),os.type(),os.platform(),os.totalmem(),os.freemem(),os.homedir(),os.tmpdir(),os.hostname())