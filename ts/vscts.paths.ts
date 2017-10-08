import * as plugins from './vscts.plugins'

// dirs
export let cwd = process.cwd()
export let dotVscodeDir = plugins.path.join(cwd, '.vscode/')

export let packageDir = plugins.path.join(__dirname, '../')
export let assetDir = plugins.path.join(packageDir, './assets/')

// files
export let launchJson = plugins.path.join(dotVscodeDir, 'launch.json')
