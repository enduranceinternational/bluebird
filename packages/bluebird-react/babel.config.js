module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        shippedProposals: true,
        modules: 'commonjs',
        targets: {
          ie: 9,
        },
      },
    ],
    '@babel/react',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    'transform-class-properties',
    ['@babel/plugin-transform-runtime', { useESModules: false }],
  ],
};
