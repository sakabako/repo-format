# Repo Format

This allows people on a team to each use their own autoformat settings while they work but commit their changes with the same settings. It uses the git attributes file and esformatter to have git reformat your code between the file system and the diff stanges.

Some of the default settings were made to reduce the size of diffs:

* Variable declarations are not indented, preventing large changes when a long variable is added or removed.
* One var statment per line prevents an extra line for the ending semicolon.
* Objects with 4 properties are expanded to multi line so you can see the one property that changed.

A set of plugins are automatically installed so you can change these.

## Installation

`npm install --save-dev repo-format`

The installation script on this repo will automatically add it to its parent.

## Configuration

For options, see the [esformatter default](https://github.com/millermedeiros/esformatter/blob/master/lib/preset/default.json).

### Your Repo's Style

Create a file called `repo-format.json` and fill it with your configuration.

### Your Personal Style

Create a file called `local-format.json` and fill it with your own personal configuration. You will probably want to add this file to .gitignore.

_NOTE: You should avoid having the formatter add new lines in your personal configuration unless they mirror the repo's configuration. Otherwise you will end up needing to commit reformatted files that others have commited._

### Built In Plugins

repo-format comes with several esformatter plugins installed. Most but not all are active by default. Add them to your local-format.json to use them, and see their indvidual repos for documentation.

#### Built In

* `esformatter-collapse-objects`
* `esformatter-remove-trailing-commas`
* `esformatter-eol-last`
* `esformatter-dot-notation`
* `esformatter-semicolons`
* `esformatter-braces`
* `esformatter-quotes`

#### Available

* `esformatter-align`
