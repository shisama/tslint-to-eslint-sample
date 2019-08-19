module.exports = {
    "env": {
        "browser": true
    },
    "extends": [],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-param-reassign": "error",
        "@typescript-eslint/no-triple-slash-reference": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/unified-signatures": "warn",
        "constructor-super": "error",
        "no-cond-assign": "error",
        "no-duplicate-case": "error",
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-functions": "error",
        "no-invalid-this": "error",
        "no-new-wrappers": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-unsafe-finally": "error",
        "no-unused-labels": "error",
        "no-var": "warn",
        "prefer-const": "warn",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "deprecation": true,
                    "no-duplicate-imports": true,
                    "no-duplicate-variable": true,
                    "no-floating-promises": true,
                    "no-implicit-dependencies": true,
                    "no-import-side-effect": true,
                    "no-shadowed-variable": true,
                    "no-void-expression": true,
                    "trailing-comma": true,
                    "triple-equals": true
                }
            }
        ]
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint"
    ],
    "settings": {}
};
