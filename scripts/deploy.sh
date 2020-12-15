tip() {
    echo "======= $1 ======";
}

br=`git branch | grep "*"`;
branch=${br/* /};

if test $branch = 'master'
then 
    echo "当前分支为master分支，请使用开发分支提交代码";
else
    if [ ! -n "$1" ] ;then
        echo '请输入commit信息再提交代码';
    else
        echo "当前分支为：$branch";
        echo '';
        npm run build;

        tip 'commit start';
        echo '';
        git add .
        git commit -m $1;
        git push;
        echo '';
        tip 'commit end';
    fi
fi
