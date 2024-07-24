Package.describe({
  name: 'mozfet:autoform-materialize',
  summary: 'Materialize theme for Autoform',
  version: '5.1.6',
  git: 'https://github.com/AppWorkshop/meteor-autoform-materialize.git'
});

Npm.depends({
  'moment': '2.22.2',
  '@shopify/draggable': '1.0.0-beta.8'
});

Package.onUse(function(api) {
  api.use(['templating', 'blaze'], 'client');
  api.use([
    'aldeed:autoform@6.3.0',
    'mozfet:materialize-icons@1.1.7'
  ], 'client');
  api.use(['ecmascript', 'underscore'], 'client');
  api.use('fourseven:scss@4.15.1');
  api.addFiles(['index.js', 'style.scss'], 'client');
});
