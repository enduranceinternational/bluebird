module.exports = process.env.BRAND
  ? require(`@eigi/bluebird-${process.env.BRAND}`)
  : require('@eigi/bluebird-theme-default');
