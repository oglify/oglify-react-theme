Package.describe({
  name: "oglify:react-theme",
  version: "0.0.1",
  summary: "CSS themes for OGLify React",
  git: "https://github.com/oglify/oglify-react-theme",
  documentation: "README.md",
});

Npm.depends({
  ecmascript: "1.0.0",
  bulma: "0.9.3",
});

Package.onUse(function (api) {
  api.versionsFrom("2.5.3");
  api.use("ecmascript");
  api.addFiles(".npm/package/node_modules/bulma/css/bulma.css", "client");
  api.mainModule("oglify-react-theme.js");
});

Package.onTest(function (api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("oglify:react-theme");
  api.mainModule("oglify-react-theme-tests.js");
});
