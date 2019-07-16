/* eslint-disable */
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 1%'],
    }),
    require('precss'),
    require('postcss-flexibility')(),
  ],
}
