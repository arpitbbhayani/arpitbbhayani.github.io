DIR=/home/arpit/workspace/arpitbhayani.me

cd $DIR/semantic
$DIR/node_modules/.bin/gulp build

cp $DIR/semantic/dist/semantic.min.css $DIR/static/css
cp $DIR/semantic/dist/semantic.min.js $DIR/static/js
cp -r $DIR/semantic/dist/themes/default/assets/fonts $DIR/static/
