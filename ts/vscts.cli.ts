import * as plugins from './vscts.plugins'
import * as paths from './vscts.paths'

import { Smartcli } from 'smartcli'

export let vsctsCli = new plugins.smartcli.Smartcli()

vsctsCli.standardTask().then((arvArg) => {
  plugins.beautylog.info('now handling TypeScript files with ts-node!')
})

vsctsCli.addCommand('init').then((argvArg) => {
  plugins.smartfile.fs.ensureDir(paths.dotVscodeDir)
  // copy file
  plugins.smartfile.fs.copySync(plugins.path.join(paths.assetDir, 'lainch.json'), paths.launchJson)
})

vsctsCli.startParse()
