npm run build
cd /Users/yong/paktor/github/web-datesmith/packages/system/public/assets/static/payment.fleek
rm -rf *
cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd /Users/yong/paktor/github/web-datesmith/
git rm packages/system/public/assets/static/payment.fleek/*
git add packages/system/public/assets/static/payment.fleek/*
git commit -m "stripe fleek update"
git push
