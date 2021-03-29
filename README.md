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

# Publish the package (you will need to login and authenticate against github)
$ git checkout main
$ npm publish --tag latest
```
