// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by oglify-react-theme.js.
import { name as packageName } from "meteor/oglify-react-theme";

// Write your tests here!
// Here is an example.
Tinytest.add('oglify-react-theme - example', function (test) {
  test.equal(packageName, "oglify-react-theme");
});
