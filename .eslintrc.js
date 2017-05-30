module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "eslint:recommended",
        "plugin:css-modules/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:jest/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:promise/recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "bdd",
        "css-modules",
        "import",
        "jest",
        "jsdoc",
        "jsx-a11y",
        "promise",
        "react",
        "security"
    ],
    "rules": {
        // bdd
        "bdd/exclude": 2,
        "bdd/focus": 2,
        // css-modules
        "css-modules/no-unused-class": 2,
        // import
        "import/export": 2,
        "import/first": 2,
        "import/max-dependencies": [2, {"max": 10}],
        "import/newline-after-import": 2,
        "import/no-absolute-path": 2,
        "import/no-duplicates": 2,
        "import/no-mutable-exports": 2,
        "import/no-named-as-default-member": 2,
        "import/no-named-as-default": 2,
        "import/no-unresolved": 2,
        "import/order": ["error", {"newlines-between": "always-and-inside-groups"}],
        // jsdoc
        "jsdoc/check-param-names": 2,
        "jsdoc/check-tag-names": 2,
        "jsdoc/check-types": 2,
        "jsdoc/newline-after-description": 2,
        "jsdoc/require-description-complete-sentence": 2,
        "jsdoc/require-example": 1,
        "jsdoc/require-param": 2,
        "jsdoc/require-param-description": 2,
        "jsdoc/require-param-type": 1,
        "jsdoc/require-returns-description": 2,
        "jsdoc/require-returns-type": 2,
        // react
        "react/jsx-filename-extension": 0, // overrides recommended 2 (error)
        // security
        "security/detect-unsafe-regex": 2,
        "security/detect-buffer-noassert": 2,
        "security/detect-child-process": 2,
        "security/detect-disable-mustache-escape": 2,
        "security/detect-eval-with-expression": 1,
        "security/detect-no-csrf-before-method-override": 2,
        "security/detect-non-literal-fs-filename": 1,
        "security/detect-non-literal-regexp": 1,
        "security/detect-non-literal-require": 1,
        "security/detect-object-injection": 2,
        "security/detect-possible-timing-attacks": 1
    }
};
