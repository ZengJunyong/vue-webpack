npm run build
cd ~/paktor/gokaikai/packages/system/public/assets/static/payment
rm -rf *
cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/gokaikai
git rm packages/system/public/assets/static/payment/*
git add packages/system/public/assets/static/payment/*
git commit -m "stripe update"
git push
