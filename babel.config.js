// @flow

module.exports = function(api) {
    api.cache(true);

    return {
        'presets': [
            [
                '@babel/preset-env',
                {
                    'modules': false,
                    'useBuiltIns': false,
                    'targets': {
                        'browsers': [
                            '>5%'
                        ]
                    }
                }
            ],
            '@babel/preset-react',
            '@babel/preset-flow'
        ],
        'plugins': [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-syntax-import-meta',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-json-strings',
            [
                '@babel/plugin-proposal-decorators',
                {
                    'legacy': true
                }
            ],
            '@babel/plugin-proposal-function-sent',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-logical-assignment-operators',
            '@babel/plugin-proposal-optional-chaining',
            [
                '@babel/plugin-proposal-pipeline-operator',
                {
                    'proposal': 'minimal'
                }
            ],
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-do-expressions',
            '@babel/plugin-proposal-function-bind'
        ],
        'env': {
            'production': {
                'plugins': [
                    'transform-react-remove-prop-types',
                    '@babel/plugin-transform-react-inline-elements',
                    '@babel/plugin-transform-react-constant-elements'
                ]
            },
            'development': {
                'plugins': [
                    [
                        'babel-plugin-styled-components',
                        {
                            'displayName': true
                        }
                    ]
                ]
            },
            'test': {
                'presets': [
                    [
                        '@babel/preset-env',
                        {
                            'modules': false,
                            'useBuiltIns': false,
                            'targets': {
                                'node': 'current'
                            }
                        }
                    ],
                    '@babel/preset-react',
                    '@babel/preset-flow'
                ],
                'plugins': [
                    '@babel/plugin-syntax-dynamic-import',
                    '@babel/plugin-syntax-import-meta',
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-proposal-json-strings',
                    [
                        '@babel/plugin-proposal-decorators',
                        {
                            'legacy': true
                        }
                    ],
                    '@babel/plugin-proposal-function-sent',
                    '@babel/plugin-proposal-export-namespace-from',
                    '@babel/plugin-proposal-numeric-separator',
                    '@babel/plugin-proposal-throw-expressions',
                    '@babel/plugin-proposal-export-default-from',
                    '@babel/plugin-proposal-logical-assignment-operators',
                    '@babel/plugin-proposal-optional-chaining',
                    [
                        '@babel/plugin-proposal-pipeline-operator',
                        {
                            'proposal': 'minimal'
                        }
                    ],
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                    '@babel/plugin-proposal-do-expressions',
                    '@babel/plugin-proposal-function-bind',
                ],
            }
        }
    };
};