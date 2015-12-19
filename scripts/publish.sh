# Copies _site folder

ROOT=/Users/arpitbhayani/arpitbbhayani.github.io/
TMP_FOLDER=/tmp/arpitbbhayani.github.io
SITE_DIR=/Users/arpitbhayani/arpitbbhayani.github.io/_site/

if [ -d $TMP_FOLDER ]; then
    rm -rf $TMP_FOLDER/*
else
    mkdir $TMP_FOLDER
fi

cp -r $SITE_DIR/* $TMP_FOLDER

cd $ROOT
git checkout master
cd $ROOT
cp -r $TMP_FOLDER/* .
git status
