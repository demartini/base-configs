'use strict'

const fs = require('fs')
const path = require('path')

const filePath = path.join(process.env.INIT_CWD, '.eslintrc.json')

const fileConfigObject = {
  extends: ['@demartini']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObject, undefined, 2))
}
