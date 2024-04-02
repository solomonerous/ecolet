const childProcess = require('child_process')
const fs = require('fs')
const path = require('path')

function installModules(dir) {
  if (fs.existsSync(path.join(dir, 'package.json'))) {
    childProcess.execSync('npm install', { cwd: dir, stdio: 'inherit' })
  } else {
    fs.readdirSync(dir).forEach(subdir => {
      const nextDir = path.join(dir, subdir)

      if (fs.lstatSync(nextDir).isDirectory()) {
        installModules(nextDir)
      }
    })
  }
}

// start from current directory
installModules('.')