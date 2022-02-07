function removeSNames(names) {
  return names.filter(name => name.toLowerCase().charAt(0) !== 's');
}

module.exports = removeSNames;
