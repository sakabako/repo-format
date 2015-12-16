# Repo Format

This allows people on a team to each use their own autoformat settings while they work but commit their changes with the same settings. It uses the git attributes file and esformatter to have git reformat your code between the file system and the diff stanges.

Some of the default settings were made to reduce the size of diffs:

* Variable declarations are not aligned, preventing large changes when a long variable is added or removed.
* Objects with 4 properties are expanded to multi line so you can see the one property that changed.

A set of plugins are automatically installed so you can change these.

## Installation

`npm install --save-dev repo-format`

The installation script on this repo will automatically add it to its parent.

## Configuration

For options, see the [esformatter default](https://github.com/millermedeiros/esformatter/blob/master/lib/preset/default.json).

### Your Repo's Style

Installation will create a file called `.esformatter` if it doesn't already exist. This file will be used for your repo's style.

### Your Personal Style

Create a file, `~/.local-format.json` and fill it with your own personal configuration. 

If you need to format a specific repository differently you can create a `local-format.json` in that repo. You will probably want to add this file to .gitignore.

_NOTE: You should avoid having the formatter add new lines in your personal configuration unless they mirror the repo's configuration. Otherwise you will end up needing to commit reformatted files that others have commited._

### Built In Plugins

repo-format comes with several esformatter plugins installed. Most but not all are active by default, but that can be changed in the repo's `.esformatter` file. See their indvidual repos for documentation.

#### Active

* `esformatter-collapse-objects`
* `esformatter-remove-trailing-commas`
* `esformatter-eol-last`
* `esformatter-dot-notation`
* `esformatter-semicolons`
* `esformatter-braces`
* `esformatter-quotes`

#### Available

* `esformatter-align`
* `esformatter-var-each`

## Common Settings

### Changing Indents

```javascript
  "indent" : {
    "value": "\t" // use "  " for two spaces
  },
```

### Double Quotes

```javascript
  "plugins": [
    "esformatter-quotes"
  ],
  "quotes": {
    "type": "double",
    "avoidEscape": true
  }
```

### Multiple `var` Statements

This does not have a clean undo, so it's not enabled by default. It should only be enabled in .esformatter (not local-format.json) to prevent unexpected changes.

```javascript
  "plugins": [
    "esformatter-var-each"
  ]
```

### Brackets optional on `if` statements

remove `esformatter-braces` from the plugins array.

### Indents on chaining

For example:
```javascript
$.load(something)
.then(function (data) {
	//whatever
})
.then(doOtherThing)
```

The default for this is to _not_ indent. This is so the methods inside don't get two levels of indent. This setting changes that to one level of indent:

```javascript
  "indent" : {
    "MemberExpression": 1
  },

```

-1 will leave it as is.

### Spacing Around `function` keywords

```javascript
  "whiteSpace" : {
    "value" : " ",
    "removeTrailing" : 1,

    "before" : {
      "FunctionDeclarationOpeningBrace" : 1,
      "FunctionDeclarationClosingBrace" : 1,
      "FunctionExpressionOpeningBrace" : 1,
      "FunctionExpressionClosingBrace" : 1,
      "FunctionGeneratorAsterisk": 0,
      "FunctionName" : 1
    },

    "after" : {
      "FunctionReservedWord": 0,
      "FunctionName" : 0,
      "FunctionExpressionOpeningBrace" : 1,
      "FunctionExpressionClosingBrace" : 0,
      "FunctionDeclarationOpeningBrace" : 1,
      "FunctionDeclarationClosingBrace" : 1
    }
  }
```

















