#!/bin/bash

# The aim of this script to create tag folders
# one for each tag
# to get the list of the tag use the URL
# http://localhost:4000/meta-script/all-tags/

# The script assumes an input text file containing list of all tags
# of the website obtained from above URL copy pasted

# This file is then given as an argument to this script.

IFS=$'\n'		# make newlines the only separator
TAG_TEMPLATE="../_posts/tags/template.markdown.txt"
TAG_DIR="../_posts/tags"

for tag in `cat tags.txt`
do
	tag=`echo $tag | tr " " -`
	sed "s/;TAG;/$tag/g" $TAG_TEMPLATE > $TAG_DIR/2019-04-13-$tag.markdown
done
