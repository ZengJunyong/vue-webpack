npm run build
cd ~/paktor/kaikai-ms/packages/system/public/assets/static/payment
rm -rf *
cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/kaikai-ms
git rm packages/system/public/assets/static/payment/*
git add packages/system/public/assets/static/payment/*
git commit -m "stripe MY update"
git push