import * as fs from 'fs-extra'
import path = require('path')
import options from '../options'

export default async function ():Promise<string> {
  const packFile = path.resolve(__dirname, '../../package.json')

  const packageCode = await fs.readFile(packFile)

  const packageJson = JSON.parse(packageCode.toString())

  options.version = packageJson.version

  return options.version
}



