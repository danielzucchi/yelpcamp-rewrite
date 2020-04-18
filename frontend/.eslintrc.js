module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: ['prettier', 'jest', 'import', 'only-warn', 'json'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    amd: true,
    node: true,
    jest: true,
    'jest/globals': true
  },
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id']
        }
      }
    ],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 80,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.js', '**/*.test.js']
      }
    ]
  }
};
