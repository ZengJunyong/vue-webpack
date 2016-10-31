npm run build
cd /Users/junyong/paktor/gokaikai/packages/system/public/assets/static/payment
rm -rf *
cp -rf /Users/junyong/learn/vue.js/vue-cli/webpack/dist/* .
cd /Users/junyong/paktor/gokaikai
git rm packages/system/public/assets/static/payment/*
git add packages/system/public/assets/static/payment/*
git commit -m "stripe update"
git push
