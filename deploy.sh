n use 5.12.0 build/build.js
cd ~/paktor/github/web-gaigai/packages/system/public/assets/static/payment && rm -rf *
cd ~/paktor/github/web-gaigai && git rm -r packages/system/public/assets/static/payment/*
cd ~/paktor/github/web-gaigai/packages/system/public/assets/static/payment && cp -rf ~/learn/vue.js/vue-cli/webpack/dist/* .
cd ~/paktor/github/web-gaigai && git add packages/system/public/assets/static/payment/*
git commit -m "stripe update"
git push
