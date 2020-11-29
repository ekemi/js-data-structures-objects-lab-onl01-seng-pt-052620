// Write your solution in this file!
var driver = {}
function updateDriverWithKeyAndValue(driver, key, value) {
  return Driver.assign({}, driver, { [key]: value })
}
