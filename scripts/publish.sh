# Copies _site folder

ROOT=/Users/arpitbhayani/arpitbbhayani.github.io/
TMP_FOLDER=/tmp/arpitbbhayani.github.io
SITE_DIR=/Users/arpitbhayani/arpitbbhayani.github.io/_site/

if [ -d $TMP_FOLDER ]; then
    rm -rf $TMP_FOLDER/*
else
    mkdir $TMP_FOLDER
fi

jekyll build

cp -r $SITE_DIR/* $TMP_FOLDER

cd $ROOT
git checkout master
cd $ROOT

cp -r $TMP_FOLDER/* .
git status

read -p "Do you wish to continue with publishing it to master? [y/n]" yn
case $yn in
    [Yy]* ) git add --all; git commit -m 'Publishing latest site'; git push origin master; break;;
    [Nn]* ) git reset --hard origin/master; break;;
    * ) echo "Please answer yes or no.";;
esac

git checkout source
