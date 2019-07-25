module.exports = {
  extends: ['stylelint-prettier/recommended'],
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  rules: {
    // Base rules
    indentation: 2,
    'number-leading-zero': 'never',
    'string-quotes': 'double',
    'selector-max-id': 0,
    'selector-list-comma-newline-after': 'always',
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-single-line-comment'],
        ignore: ['after-comment'],
      },
    ],
    'comment-empty-line-before': [
      'always',
      { except: ['first-nested'] },
    ],
    'block-opening-brace-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-property-value-blacklist': { '/^border/': ['none'] },
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],

    // Sass rules
    'max-nesting-depth': 2,
    'scss/dollar-variable-pattern': '^_?[a-z]+[\\w-]*$',
    'scss/at-extend-no-missing-placeholder': true,
    'order/order': [
      'declarations',
      { type: 'at-rule' },
      { type: 'at-rule', hasBlock: true },
      'rules',
    ],

    // prettier
    'prettier/prettier': true,
  },
};
