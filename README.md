# mdm-resources

## Releasing

* Use GitFlow to release, find the version in `package.json`.
* Update package.json with the version being released
* Install npm modules
* Build `lib`
* Commit the files in `lib` and the `package.json` file with the commit message `Release <release version>`
* Finish the release using git flow
* Checkout the `develop` branch and update the version in `package.json` to the next snaphot
* Push the `main` & `develop` branches and the new tag

```shell
# Start release
$ git flow release start <Next release>

# Update version in package.json
# Install npm modules
$ npm install

# Build
$ npm run build

# Commit lib folder

# Finish the release
$ git flow release finish <Next release>

# Update version on develop branch to next minor snapshot and commit
# Push 
$ git push --all && git push --tags
```

## Using the build

### develop

If using the develop branch then adding the following to `package.json` will allow you to track this repo's develop branch

```json
"@maurodatamapper/mdm-resources": "git+https://github.com/MauroDataMapper/mdm-resources.git#develop"
```

Running the following will update a package-lock file to get the latest commit hash for the develop branch

```shell
$ npm update @maurodatamapper/mdm-resources
```

### main

Following a release of this repository is the recommended option and the dependency should be added to `package.json`

```json
"@maurodatamapper/mdm-resources": "git+https://github.com/MauroDataMapper/mdm-resources.git#<RELEASE_TAG>"
```

the package-lock file can be updated if you update the release tag by running

```shell
$ npm update @maurodatamapper/mdm-resources
```