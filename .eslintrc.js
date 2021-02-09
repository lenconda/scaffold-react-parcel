const { eslint } = require('@ice/spec');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-undef': [0],
  },
};
