# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
echo '进行编译 npm run docs:build'
npm run docs:build

echo '编译完成~'

# 进入生成的文件夹
cd docs/.vuepress/dist

# 打印编译文件
ls
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

echo '进行git部署' 
git init
git add -A
git commit -m 'deploy'

echo '上传服务器 git@github.com:yuzejia/vuepress-blog.git master:gh-pages'
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yuzejia/vuepress-blog.git master:gh-pages

echo '服务器部署成功 ok~'
cd -