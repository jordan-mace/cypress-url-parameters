const setString = (key, value, currentVal) => {
    currentVal += (currentVal.indexOf('?') != -1 ? '&' : '?') + key + '=' + value
    return currentVal;
}

module.exports = setString;