# Copies _site folder

ROOT=/Users/arpitbhayani/arpitbbhayani.github.io/
TMP_FOLDER=/tmp/arpitbbhayani.github.io/
SITE_DIR=/Users/arpitbhayani/arpitbbhayani.github.io/_site/

if [ -d $TMP_FOLDER ]; then
    rm -rf $TMP_FOLDER
fi
mkdir $TMP_FOLDER

cd $ROOT

jekyll build
cp -r $SITE_DIR/* $TMP_FOLDER

git checkout master
cp -r $TMP_FOLDER/* .
git status

read -p "Do you wish to see the diff of all files? [y/n]" yn
while true; do
    case $yn in
        [Yy]* ) git diff; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

read -p "Do you wish to continue with publishing it to master? [y/n]" yn
while true; do
    case $yn in
        [Yy]* ) git add --all; git commit -m 'Publishing latest site'; git push origin master; break;;
        [Nn]* ) git reset --hard origin/master; break;;
        * ) echo "Please answer yes or no.";;
    esac
done

git checkout source

echo 'Cleaning ...'
echo "Removing $TMP_FOLDER" && rm -rf $TMP_FOLDER
