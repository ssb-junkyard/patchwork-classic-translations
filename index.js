'use strict'

var Polyglot = require('node-polyglot')
var polyglot = new Polyglot()
var moment = require('moment')

var t = polyglot.t.bind(polyglot)
t.locales = require('./locales')

function tryLocale(locale) {
  return locale in t.locales && locale
}

t.setLocale = function (locale) {
  locale = tryLocale(locale)
    || tryLocale(locale.replace(/[._]g/, '-'))
    || tryLocale(locale.replace(/[._].*$/, ''))
    || tryLocale(locale.replace(/[._-](..)$/, function ($0, $1) {
      return '-' + $1.toUpperCase()
    }))
    || 'en'
  var phrases = t.locales[locale]
  t.locale = locale
  polyglot.locale(locale)
  polyglot.extend(phrases)
  moment.locale(locale)
}

module.exports = t
