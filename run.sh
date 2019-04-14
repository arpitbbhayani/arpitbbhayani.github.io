act=$1
direc=/home/arpit/temp_site
if [ $act == 'mv' ];
then

    mkdir $direc
    mv _posts/codechef $direc
    mv _posts/spoj $direc
    mv _posts/leetcode $direc
    mv _posts/hackerrank $direc

    mv _posts/2019-04-13-programming.markdown $direc
    mv _posts/2019-04-13-hackerrank.markdown $direc
    mv _posts/2019-04-13-codechef.markdown $direc
    mv _posts/2019-04-13-leetcode.markdown $direc
    mv _posts/2019-04-13-spoj.markdown $direc

elif [ $act == 'mvv' ];
then
    mv $direc/* _posts
    rmdir $direc
fi
