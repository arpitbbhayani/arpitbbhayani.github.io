DIR=~/myw/arpitbhayani.me
TEMP_DIR=/tmp/arpitbhayani.me/data

if [ ! -d $TEMP_DIR ];
then
    mkdir -p $TEMP_DIR
fi

mv $DIR/_posts/spoj $TEMP_DIR/spoj
mv $DIR/_posts/hackerrank $TEMP_DIR/hackerrank
mv $DIR/_posts/leetcode $TEMP_DIR/leetcode
mv $DIR/_posts/codechef $TEMP_DIR/codechef
