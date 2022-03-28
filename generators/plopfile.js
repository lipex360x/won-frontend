/* eslint-disable */
const components = require('./components')
const generator = require('./_generator')

module.exports = function (plop) {
  plop.setGenerator('Component', components)
  plop.setGenerator('Generator', generator)
}
