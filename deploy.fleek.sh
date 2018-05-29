n use 5.12.0 build/build.js
cd ~/paktor/github/web-gaigai/packages/system/public/assets/static/payment.fleek
rm -rf *
cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/github/web-gaigai
git rm packages/system/public/assets/static/payment.fleek/*
git add packages/system/public/assets/static/payment.fleek/*
git commit -m "stripe fleek update"
git push
