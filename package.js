packages = [];

Package.describe({
  name: 'idometeor:init',
  version: '0.0.1',
  summary: 'Instantiates the iDM global object which is extended by other iDoMeteor packages.',
  git: 'https://github.com/iDoMeteor/meteor-init',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles([
    'init.js',
  ], ['client', 'server']);
  api.export([
    'iDM',
  ]);
});

Package.onTest(function(api) {
  api.use('tinytest');
  packages.push('idometeor:init');
  api.use(packages);
  api.addFiles('init-tests.js');
});
