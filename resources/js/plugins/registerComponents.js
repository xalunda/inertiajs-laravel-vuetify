import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requireComponent = require.context(
  '@/Components',
  true,
  /[A-Z]\w+\.vue$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const config = componentConfig.default || componentConfig
  const componentName = config.name || upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )
  Vue.component(
    componentName,
    config
  )
})