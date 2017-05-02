'use strict';

module.exports = {
    rules: {
        'align': [true, 'parameters', 'arguments', 'statements'],
        'array-type': [true, 'array'],
        'arrow-parens': [true, 'ban-single-arg-parens'],
        'arrow-return-shorthand': [true, 'multiline'],
        'callable-types': true,
        'class-name': true,
        'comment-format': [true, 'check-space', 'check-uppercase'],
        'completed-docs': true,
        'file-header': false,
        'import-spacing': true,
        'interface-name': [true, 'never-prefix'],
        'interface-over-type-literal': true,
        'jsdoc-format': true,
        'match-default-export-name': true,
        'newline-before-return': true,
        'new-parens': true,
        'no-angle-bracket-type-assertion': false,
        'no-boolean-literal-compare': true,
        'no-consecutive-blank-lines': true,
        'no-parameter-properties': true,
        'no-reference-import': true,
        'no-trailing-whitespace': true,
        'no-unnecessary-callback-wrapper': true,
        'no-unnecessary-initializer': true,
        'no-unnecessary-qualifier': true,
        'object-literal-key-quotes': [true, 'consistent-as-needed'],
        'object-literal-shorthand': true,
        'one-line': [true,
            'check-catch',
            'check-else',
            'check-finally',
            'check-open-brace',
            'check-whitespace'
        ],
        'one-variable-per-declaration': [true, 'ignore-for-loop'],
        'ordered-imports': false,
        'prefer-function-over-method': true,
        'prefer-method-signature': true,
        'prefer-template': true,
        'quotemark': [true, 'single', 'avoid-escape'],
        'return-undefined': true,
        'semicolon': [true, 'always'],
        'space-before-function-paren': [true, 'always'],
        'variable-name': [true,
            'ban-keywords',
            'check-format',
            'allow-leading-underscore'
        ],
        'whitespace': [true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-module',
            'check-preblock',
            'check-separator',
            'check-type',
            'check-typecast'
        ]
    }
};
