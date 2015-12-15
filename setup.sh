#!/bin/bash

if [ -d ./.git/info ]; then
	echo 'not making ./git/info'
else
	mkdir ./.git/info
fi

if [ -f ./.git/info/attributes ]; then
	echo 'not making ./git/info/attributes'
else
	attributes="
\n*.js  filter=repoformat
\n*.jsx  filter=repoformat
"

	echo -e $attributes >> ./.git/info/attributes
fi

Smudge=$(git config filter.repoformat.smudge)

echo $Smudge;

if [ "$Smudge" == '' ]; then
	git config filter.repoformat.smudge './node_modules/repo-format/node_modules/.bin/esformatter --config ./local-format.json'
	git config filter.repoformat.clean './node_modules/repo-format/node_modules/.bin/esformatter'

	git checkout HEAD -- **
else
	echo 'not adding git settings'
fi
