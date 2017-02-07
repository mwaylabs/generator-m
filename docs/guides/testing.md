# Testing
When you generate an app with Generator-M-Ionic it comes with a fully configured and ready-to-use setup for unit and end-to-end testing.

The setup uses [Karma](http://karma-runner.github.io/) for your unit tests and [Protractor](http://angular.github.io/protractor/#/) for end-to-end tests. The Karma configuration consists of a fully configured `karma.conf.js` and some sample tests in `test/karma/`. Likewise the Protractor configuration consists of a `protractor.conf.js` and sample tests in `test/protractor/`. Both also provide a ready-to-use `.eslintrc` configuration that extends the one in `app/.eslintrc`.

<pre>
├──  test/
│   └──  karma/
│   └──  protractor/
├──  karma.conf.js
├──  protractor.conf.js
</pre>

Using any of Generator-M-Ionic's [sub-generators](./sub_generators.md) will also create a sample unit test file for that component in `test/karma/<module>/`.

If you are new to testing with Angular we recommend [angulartestingquickstart.com](http://angulartestingquickstart.com/) **to learn about testing with karma and protractor**.


## Gulp tasks
To check if all tests in your project are running properly use:

```sh
gulp karma
# and
gulp protractor
```
**Hint**: `gulp watch` and `gulp protractor` should not be run at the same time, this will yield unexpected and weird results. Make sure to run them separately!

**Advanced**: You can start both commands with optional parameter `--conf=configfile.js`. So in case you have different setup configurations, you can run
`gulp karma --conf='karma.extra.conf.js'` or `gulp protractor --conf='protractor.ios.conf.js'`.


### Karma and Jasmine for unit tests
In addition to providing [Karma](http://karma-runner.github.io/) as a task runner for your unit tests our setup is configured to use [Jasmine](http://jasmine.github.io/) as a testing framework. This is done in the `karma.conf.js`. There are other options besides Jasmine but since Protractor is using it too, it's the simplest just to write your unit tests with Jasmine as well.

Here are some good resources to get started with writing unit tests:
- AngularJS Developer Guide - [Unit Testing](https://docs.angularjs.org/guide/unit-testing)
- Smashing Magazine - [Unit Testing In AngularJS](http://www.smashingmagazine.com/2014/10/introduction-to-unit-testing-in-angularjs/)
  - careful: this article uses Mocha, Chai & Sinon instead of Jasmine. Still worth a look for general concepts!

### Protractor for end-to-end tests
Learn more about [Protractor](https://angular.github.io/protractor/#/) and on writing end-to-end tests here:
  - Protractor for AngularJS - http://ramonvictor.github.io/protractor/slides/#/

### Additional resources
- Jasmine-Matchers: additional matchers for Jasmine - https://github.com/JamieMason/Jasmine-Matchers
