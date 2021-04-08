'use strict'

const fs = require('fs')
const path = require('path')

const filePath = path.join(process.env.INIT_CWD, '.commitlintrc.json')

const fileConfigObject = {
  extends: ['@demartini/commitlint-config']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
