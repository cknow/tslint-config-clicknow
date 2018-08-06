'use strict';

module.exports = {
    rules: {
        'await-promise': true,
        'ban': false,
        'curly': [true, 'ignore-same-line'],
        'forin': true,
        'import-blacklist': true,
        'label-position': true,
        'no-arg': true,
        'no-bitwise': true,
        'no-conditional-assignment': true,
        'no-console': [true, 'error', 'log'],
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-super': true,
        'no-duplicate-switch-case': true,
        'no-duplicate-variable': [true, 'check-parameters'],
        'no-dynamic-delete': true,
        'no-empty': [true, 'allow-empty-catch'],
        'no-eval': true,
        'no-floating-promises': true,
        'no-for-in-array': true,
        'no-implicit-dependencies': [true, 'dev'],
        'no-inferred-empty-object-type': true,
        'no-invalid-template-strings': true,
        'no-invalid-this': true,
        'no-misused-new': true,
        'no-null-keyword': false,
        'no-object-literal-type-assertion': true,
        'no-return-await': true,
        'no-shadowed-variable': [true, {
            class: true,
            enum: true,
            function: true,
            interface: true,
            namespace: true,
            typeAlias: true,
            typeParameter: true,
            temporalDeadZone: true
        }],
        'no-sparse-arrays': true,
        'no-string-literal': true,
        'no-string-throw': true,
        'no-submodule-imports': false,
        'no-switch-case-fall-through': true,
        'no-this-assignment': [true, {
            'allow-destructuring': true
        }],
        'no-unnecessary-class': [
            true,
            'allow-constructor-only',
            'allow-empty-class',
            'allow-static-only'
        ],
        'no-unbound-method': true,
        'no-unsafe-any': false,
        'no-unsafe-finally': true,
        'no-unused-expression': [true, 'allow-fast-null-checks'],
        'no-use-before-declare': true,
        'no-var-keyword': true,
        'no-void-expression': false,
        'prefer-conditional-expression': [true, 'check-else-if'],
        'prefer-object-spread': true,
        'radix': true,
        'restrict-plus-operands': true,
        'strict-boolean-expressions': false,
        'strict-type-predicates': true,
        'switch-default': true,
        'triple-equals': true,
        'use-default-type-parameter': true,
        'use-isnan': true
    }
};
