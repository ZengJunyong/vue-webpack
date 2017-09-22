npm run build
cd ~/paktor/kaikai-ms/packages/system/public/assets/static/payment.fleek
rm -rf *
cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/kaikai-ms
git rm packages/system/public/assets/static/payment.fleek/*
git add packages/system/public/assets/static/payment.fleek/*
git commit -m "stripe fleek update"
git push
