#! usr/bin/env sh 

set -x

pnpm run build 

cd dist

git init 
git add -A
git commit -m "Initial commit"

git push -f https://github.com/hyyrz888/deploy_test.git main:deploy_test