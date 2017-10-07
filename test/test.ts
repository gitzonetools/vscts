import { expect, tap } from 'tapbundle'
import * as vscts from '../ts/index'

tap.test('first test', async () => {
  vscts.vsctsCli.addCommand('test')
})

tap.start()
