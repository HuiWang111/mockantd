#!/bin/bash

tip() {
    echo "======= $1 ======";
}

br=`git branch | grep "*"`;
branch=${br/* /};

if test $branch = 'master'
then 
    echo "当前分支为master分支，请使用开发分支提交代码";
else
    if [ ! -n "$1" ]; then
        echo '请输入commit信息再提交代码';
    else
        echo "当前分支为：$branch";
        echo '';
        DIR_PATH="./temp/cjs/";
        FILE_NAME="/index.css";

        # rollup build
        rm -rf dist && npm run rollup;
        # tsc build
        npm run compile:cjs && npm run compile:es;

        # cp css files
        for file in ./temp/cjs/**/index.css
        do
            file_path_name=`echo ${file#${DIR_PATH}}`;
            file_path=`echo ${file_path_name%${FILE_NAME}}`;
            mkdir ./dist/cjs/components/${file_path}/style;
            cp $file ./dist/cjs/components/${file_path}/style/;
            touch ./dist/cjs/components/${file_path}/style/css.js;
            echo "import './index.css';" >> ./dist/cjs/components/${file_path}/style/css.js;

            mkdir ./dist/es/components/${file_path}/style;
            cp $file ./dist/es/components/${file_path}/style/;
            touch ./dist/es/components/${file_path}/style/css.js;
            echo "import './index.css';" >> ./dist/es/components/${file_path}/style/css.js;
        done;
        
        # remove .less line
        for file in ./dist/**/components/**/*.js
        do
            sed -i "" "/.less/d" $file;
        done

        # remove temp folder
        rm -rf temp;

        n=`echo $?`;

        if [ $n -eq 0 ]; then
            tip 'commit start';
            echo '';
            git add .
            git commit -m "$1";
            git push;
            echo '';
            tip 'commit end';
        fi
    fi
fi
