import { spawn, StdioOptions } from 'child_process'


export default function (dest: string, stdio: StdioOptions = 'inherit') {

  return function (cmd: string, args?:string[]) {

    const ls = spawn(cmd, args || [], {
      cwd: dest,
      stdio,
      shell: true
    })

    return new Promise((resolve, reject) => {
      ls.on('close', (code) => {
        if(code === 0) {
          resolve(true)
        } else {
          reject(new Error(`command error: ${cmd} ${args?.join(' ')}`))
        }
      })
    })
  }
}