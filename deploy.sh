#!/usr/bin/env sh

set -e

npm run build
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:guanpengchn/awesome-pronunciation.git master:gh-pages

cd -