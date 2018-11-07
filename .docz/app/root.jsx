import React from 'react'
import { setConfig, hot } from 'react-hot-loader'
import Theme from 'docz-theme-default'

import { imports } from './imports'
import db from './db.json'

const Root = () => <Theme db={db} imports={imports} hashRouter={false} />

// TODO: this is temporary until react-hot-loader fix hooks issues
setConfig({
  pureSFC: true,
})

export default hot(module)(Root)
