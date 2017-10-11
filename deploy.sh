npm run build
cd ~/paktor/gokaikai/packages/system/public/assets/static/payment && rm -rf *
cd ~/paktor/gokaikai && git rm -r packages/system/public/assets/static/payment/*
cd ~/paktor/gokaikai/packages/system/public/assets/static/payment && cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/gokaikai && git add packages/system/public/assets/static/payment/*
git commit -m "stripe update"
git push
