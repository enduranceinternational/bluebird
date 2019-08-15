module.exports = process.env.BRAND
  ? require(`@eigi/bluebird-${process.env.BRAND}`)
  : require('src/index.scss');
