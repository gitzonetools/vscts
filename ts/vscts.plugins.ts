import 'typings-global'

import * as beautylog from 'beautylog'
import * as path from 'path'
import * as projectinfo from 'projectinfo'
import * as smartcli from 'smartcli'
import * as smartfile from 'smartfile'
import * as smartdelay from 'smartdelay'

process.env.TS_NODE_COMPILER_OPTIONS = `
{
  "target":"es2015",
  "lib": [
    "ESNext"
  ]
}
`

require('ts-node/register')

export {
  beautylog,
  path,
  projectinfo,
  smartcli,
  smartdelay,
  smartfile
}
