// Write your solution in this file!
var driver = {}
function updateObjectWithKeyAndValue(driver, key, value) {
  return Driver.assign({}, driver, { [key]: value })
}