module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'prettier'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        tsconfigRootDir: __dirname,
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
            },
        ],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/no-named-as-default': 0,
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'linebreak-style': 'off',
        'no-useless-escape': 'warn',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
}