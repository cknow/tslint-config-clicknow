module.exports = {
  rules: {
    'await-promise': true,
    'ban': false,
    'curly': [true, 'ignore-same-line'],
    'forin': true,
    'function-constructor': true,
    'import-blacklist': true,
    'label-position': true,
    'no-arg': true,
    'no-async-without-await': true,
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
    'no-null-undefined-union': true,
    'no-object-literal-type-assertion': [true, {
      'allow-arguments': true
    }],
    'no-promise-as-boolean': true,
    'no-restricted-globals': false,
    'no-return-await': true,
    'no-shadowed-variable': [true, {
      class: true,
      enum: true,
      function: true,
      import: true,
      interface: true,
      namespace: true,
      typeAlias: true,
      typeParameter: true,
      temporalDeadZone: true,
      underscore: true
    }],
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-submodule-imports': false,
    'no-switch-case-fall-through': true,
    'no-this-assignment': [true, {
      'allow-destructuring': true
    }],
    'no-tautology-expression': true,
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
    'no-var-keyword': true,
    'no-void-expression': false,
    'prefer-conditional-expression': [true, 'check-else-if'],
    'prefer-object-spread': true,
    'radix': true,
    'restrict-plus-operands': true,
    'static-this': true,
    'strict-boolean-expressions': [
      true,
      'allow-null-union',
      'allow-undefined-union',
      'allow-string',
      'allow-enum',
      'allow-number',
      'allow-boolean-or-undefined',
      'ignore-rhs'
    ],
    'strict-comparisons': [true, {
      'allow-object-equal-comparison': true,
      'allow-string-order-comparison': true
    }],
    'strict-string-expressions': [true, {
      'allow-empty-types': true
    }],
    'strict-type-predicates': true,
    'switch-default': true,
    'triple-equals': true,
    'unnecessary-constructor': [true, {
      'check-super-calls': true
    }],
    'use-default-type-parameter': true,
    'use-isnan': true
  }
}
