module.exports = {
    'presets': [
        'module:metro-react-native-babel-preset',
    ],
    'sourceMaps': true,
    'plugins': [
        '@babel/transform-flow-strip-types',
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        [
            "transform-inline-environment-variables",
            {
                "include": ["NODE_ENV", "API"]
            }
        ],
        [
            "@babel/plugin-proposal-optional-catch-binding"
        ]
    ],
};
