n use 5.12.0 build/build.js
cd ~/paktor/github/web-heydouble/packages/system/public/assets/static/payment
rm -rf *
cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/github/web-heydouble
git rm packages/system/public/assets/static/payment/*
git add packages/system/public/assets/static/payment/*
git commit -m "stripe HK update"
git push
