#!/usr/bin/env sh

# navigate into the build output directory
cd dist
mv ../dist/dist/index.html ../dist
# if you are deploying to a custom domain
echo 'vue-stock-trader.madhukm.com' > CNAME
cd -