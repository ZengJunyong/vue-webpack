npm run build
cd ~/paktor/gokaikai/packages/system/public/assets/static/payment.fleek
rm -rf *
cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/gokaikai
git rm packages/system/public/assets/static/payment.fleek/*
git add packages/system/public/assets/static/payment.fleek/*
git commit -m "stripe fleek update"
git push
