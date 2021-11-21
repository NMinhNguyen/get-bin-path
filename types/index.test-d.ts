import { getBinPath, getBinPathSync } from '..'
import { expectType } from 'tsd'

expectType<string | undefined>(getBinPathSync())
expectType<string | undefined>(await getBinPath())

getBinPathSync({ cwd: '/' })
getBinPathSync({ name: 'name' })
await getBinPath({ cwd: '/' })
await getBinPath({ name: 'name' })
