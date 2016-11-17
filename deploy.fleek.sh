npm run build
cd /Users/junyong/paktor/gokaikai/packages/system/public/assets/static/payment.fleek
rm -rf *
cp -rf /Users/junyong/learn/vue.js/vue-cli/webpack/dist/* .
cd /Users/junyong/paktor/gokaikai
git rm packages/system/public/assets/static/payment.fleek/*
git add packages/system/public/assets/static/payment.fleek/*
git commit -m "stripe fleek update"
git push
