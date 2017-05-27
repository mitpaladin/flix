module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "css-modules",
        "header",
        "import",
        "jest",
        "jsdoc",
        "jsx-a11y",
        "promise",
        "react",
        "requirejs",
        "security"
    ],
    // "rules": {
    //     "indent": [
    //         "error",
    //         2
    //     ],
    //     "linebreak-style": [
    //         "error",
    //         "unix"
    //     ],
    //     "quotes": [
    //         "error",
    //         "single"
    //     ],
    //     "semi": [
    //         "error",
    //         "always"
    //     ]
    // }
};
