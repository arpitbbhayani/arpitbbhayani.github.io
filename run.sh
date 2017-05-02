act=$1
direc=/home/arpit/temp_site
if [ $act == 'mv' ];
then

    mkdir $direc
    mv _posts/codechef $direc
    mv _posts/spoj $direc
    mv _posts/leetcode $direc
    mv _posts/hackerrank $direc

    mv _posts/1979-01-01-programming.markdown $direc
    mv _posts/1979-01-01-hackerrank.markdown $direc
    mv _posts/1979-01-01-codechef.markdown $direc
    mv _posts/1979-01-01-leetcode.markdown $direc
    mv _posts/1979-01-01-spoj.markdown $direc

elif [ $act == 'mvv' ];
then
    mv $direc/* _posts
    rmdir $direc
fi
