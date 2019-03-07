DIR=~/myw/arpitbhayani.me
TEMP_DIR=/tmp/arpitbhayani.me/data

mv $TEMP_DIR/spoj $DIR/_posts/spoj
mv $TEMP_DIR/hackerrank $DIR/_posts/hackerrank
mv $TEMP_DIR/leetcode $DIR/_posts/leetcode
mv $TEMP_DIR/codechef $DIR/_posts/codechef

if [ -d $TEMP_DIR ];
then
    rmdir $TEMP_DIR
fi
