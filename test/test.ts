import { expect, tap } from 'tapbundle'
import * as vscts from '../ts/index'

tap.test('first test', async () => {
  console.log(vscts.standardExport)
})

tap.start()
