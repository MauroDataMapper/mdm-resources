# mdm-resources

JavaScript wrapper around the endpoints exposed by [mdm-core](https://github.com/MauroDataMapper/mdm-core)

## Build status

| Branch | Build Status |
| ------ | ------------ |
| main | [![Build Status](https://jenkins.cs.ox.ac.uk/buildStatus/icon?job=Mauro+Data+Mapper%2Fmdm-resources%2Fmain)](https://jenkins.cs.ox.ac.uk/blue/organizations/jenkins/Mauro%20Data%20Mapper%2Fmdm-resources/branches) |
| develop | [![Build Status](https://jenkins.cs.ox.ac.uk/buildStatus/icon?job=Mauro+Data+Mapper%2Fmdm-resources%2Fdevelop)](https://jenkins.cs.ox.ac.uk/blue/organizations/jenkins/Mauro%20Data%20Mapper%2Fmdm-resources/branches) |

## Installation

Install to your project via [npm](https://www.npmjs.com/package/@maurodatamapper/mdm-resources):

```shell
npm install --save @maurodatamapper/mdm-resources
```

## Development 

### Requirements

Please use [nvm](https://github.com/nvm-sh/nvm) to manage the required node dependencies, and then run `npm i -g npm@7.24.1` to update to v7 of npm

### Setup

1. Clone the `mdm-resources` repo
2. Install `nvm` environment
3. Install all dependencies

```shell
# Clone repo
$ git clone git@github.com:MauroDataMapper/mdm-resources.git

# Install the NVM environment
# This will use the `.nvmrc` file to install the node versions we need and update to the latest version of npm
$ nvm install --latest-npm

# Install the code dependencies
$ npm install
```

### Building

Run this command to build:

```shell
npm run build
```

This will compile the TypeScript code three times, to support:

1. ES5 syntax
2. ES6 syntax
3. ES2015 syntax (preferred)

Definition `*.d.ts` files and source maps will also be included.

All output will be compiled to the root level `lib` folder, with sub-folders per JavaScript syntax style.

### Compile and watch

Run this command to compile and continuously watch for code changes:

```shell
npm start
```

If you have a downstream project that is linked to your local `mdm-resources` via `npm link`, any changes made will be reflected in the client application.

### Documentation

Run this command to auto-generate API documentation for all classes in `mdm-resources:

```shell
npm run docs

# Or, to update docs when doc comments are being written...
npm run docs-watch
```

### Submitting Pull Requests

Before submitting a PR to this repo, please run this command locally:

```shell
npm run pr-checks
```

This will run through a set of steps that the Jenkins CI build will also check, so it is worth ensuring there are no errors beforehand.

Steps that will be checked are:

1. License headers should be present - if not, run the `npm run license-check add` command to fix.
2. Linting of code