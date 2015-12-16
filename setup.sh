#!/bin/bash

if [ -d ../../.git/info ]; then
	echo 'not making ../.git/info'
else
	mkdir ../../.git/info
fi

if [ -f ../../.git/info/attributes ]; then
	echo 'not making ../.git/info/attributes'
else
	attributes="
\n*.js filter=repoformat
\n*.jsx filter=repoformat
"

	echo -e $attributes >> ../../.git/info/attributes
fi

git config filter.repoformat.smudge './node_modules/repo-format/smudge'
git config filter.repoformat.clean './node_modules/repo-format/node_modules/.bin/esformatter'

if [ -f ../../.esformatter ]; then
	echo 'not replacing existing .esformatter'
else
	cp default.json ../../.esformatter
fi

echo 'Installed repo-format, you may need to run git checkout HEAD -- "$(git rev-parse --show-toplevel)" to see the changes.'
