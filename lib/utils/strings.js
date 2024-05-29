export const setString = (key, value, currentVal) => {
    currentVal += (currentVal.indexOf('?') != -1 ? '&' : '?') + key + '=' + value
    return currentVal;
}

export const removeString = (key, currentVal) => {
    var index = currentVal.indexOf(key);
    var length = currentVal.indexOf('&', index) == -1 ? currentVal.length : currentVal.indexOf('&', index);
    if(index == -1) return;
    return currentVal.substring(0, index - 1) + currentVal.substring(length, currentVal.length);
}