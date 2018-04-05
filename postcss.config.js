const autoprefixer = require('autoprefixer');

// https://github.com/ai/browserslist#queries
const autoprefixerOptions = {
  browsers: ['last 5 versions', 'IE 11', 'Safari >= 8']
};

module.exports = ctx => {
  return {
    plugins: [
      autoprefixer(autoprefixerOptions)
    ]
  }
};
