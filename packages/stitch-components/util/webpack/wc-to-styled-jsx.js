module.exports = {
  default: function (source) {
    return source.replace(/:root\s?{(.*?)}/, "$1");
  },
};
