const isNumber = (number) => {
    return !isNaN(parseFloat(number)) && !isNaN(number - 0);
};

module.exports = { isNumber };
