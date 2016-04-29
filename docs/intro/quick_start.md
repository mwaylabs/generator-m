# Quick Start
If you are experienced with the technologies in this generator, this summary might be all you need. Every topic has a more elaborate introduction in other parts of the documentation. Check out the [README.md](../../README.md).

## Setup  

#### Installation
If your system is not yet configured to run node and the Cordova platforms you desire, you can get everything up and running using the [Installation and Prerequisites](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/start/installation_prerequisites.md) guide. Once you've done that simply run:
```sh
# prerequisites
npm i -g yo gulp bower
# generator
npm i -g generator-m-ionic
```

## Development
A more detailed and advanced introduction to development with Generator-M-Ionic is provided in the [Development Introduction](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/start/development_intro.md) guide and [File structure](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/start/file_structure.md) documentation. The most basic scenario is described here:
#### Generate your project

```sh
mkdir myProject && cd $_
yo m-ionic # needs a completely empty directory (not even git!)
```
#### Run in browser

```sh
gulp watch
# add --no-open to avoid browser opening
gulp watch --no-build
```
#### Build, run on the device/emulators

```sh
# both implicitly run gulp build which builds the Ionic app into www/
gulp --cordova 'run ios --device'
gulp --cordova 'emulate ios'
# run the version currently in the www/ folder, without a new build
gulp --cordova 'run ios --device' --no-build
# build Options
gulp --cordova 'run ios --device' --minify --force-build
# Use specific target (e.g. iPhone-6)
gulp --cordova 'emulate ios --target=iPhone-6'
# to list available targets on your machine, run:
`./platforms/ios/cordova/lib/list-emulator-images`
# these will need to be installed in Xcode before ready to use
```

#### Handle Cordova platforms/plugins
```sh
# platforms, use --save to add to config.xml
gulp --cordova 'platform ls' # list
gulp --cordova 'platform add android --save' # add
gulp --cordova 'platform rm android --save' # remove
# plugins, use --save to add to config.xml
gulp --cordova 'plugins ls' # list
gulp --cordova 'plugins add org.apache.cordova.camera --save' # add
gulp --cordova 'plugins rm org.apache.cordova.camera ---save' # remove
```

##  Other topics
#### Git integration
More information in the  [Git integration](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/git_integration.md) guide.
```sh
# Good point to git init after a first successful run in the browser
# with gulp watch
git init
git add .
git commit -m 'project setup'

# Instead if you cloned a project from a repository, run
npm install # install node packages
bower install # install bower packages
gulp --cordova 'prepare' # install Cordova platforms and plugins
gulp watch
```
#### Adding AngularJS components
More detailed explanation in the [Sub-generators](https://github.com/mwaylabs/generator-m-ionic/blob/master/docs/guides/sub_generators.md) guide.
```sh
# Create a module (using only the main module is usually enough)
yo m-ionic:module <moduleName>

# Create a component in a module
yo m-ionic:<component> <name> <moduleName>
# <module name>
#   defaults to main if omitted
# <name>
#   to your liking
# <components>
#   constant
#   controller
#   directive
#   filter
#   pair - template and controller
#   template
#   service
```
#### For more advanced topics
... like Splashscreen and App Icon handling, Testing, Linting, Continuous integration and others. Please refer to our [Guides](https://github.com/mwaylabs/generator-m-ionic#guides) section in the README.
