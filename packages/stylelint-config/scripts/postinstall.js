'use strict'

const fs = require('fs')
const path = require('path')

const filePath = path.join(process.env.INIT_CWD, '.stylelintrc.json')

const fileConfigObj = {
  extends: ['@demartini/stylelint-config/css']
}

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify(fileConfigObj, null, 2))
}
