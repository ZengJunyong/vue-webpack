module.exports = {
  // http://stackoverflow.com/questions/31344041/how-to-unbind-an-array-copy-in-vue-js
  // return a common obj, not a observer obj
  getObj: obj=>JSON.parse(JSON.stringify(obj))
}
