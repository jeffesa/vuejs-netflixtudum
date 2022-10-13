const noSpecials = (str) => str.replace(/[^0-9a-zA-Z]+/g, '')
const noTags = (str) => str.replace(/<\/?[^>]*>/g, '')
const toUnderscore = (str) => str.replace(/\s+/g, '_')

module.exports = {
  noSpecials,
  noTags,
  toUnderscore
}
