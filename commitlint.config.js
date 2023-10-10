module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['app', 'ui', 'deps', 'dev-deps', 'config', 'docs'],
    ],
  },
};
