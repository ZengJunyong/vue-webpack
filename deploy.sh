npm run build
cd ~/paktor/web-gaigai/packages/system/public/assets/static/payment && rm -rf *
cd ~/paktor/web-gaigai && git rm -r packages/system/public/assets/static/payment/*
cd ~/paktor/web-gaigai/packages/system/public/assets/static/payment && cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/web-gaigai && git add packages/system/public/assets/static/payment/*
git commit -m "stripe update"
git push
