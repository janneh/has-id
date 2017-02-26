module.exports = function(id, idPropertyName) {
  return function(item) {
    return idPropertyName
      ? item[idPropertyName] === id
      : item.id === id
  }
}
