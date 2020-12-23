// babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
    "env": {
        "test": {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["transform-export-extensions"],
            "only": [
                "./**/*.js",
                "node_modules/jest-runtime"
            ]
        }
    },
};
