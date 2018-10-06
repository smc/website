#!/bin/bash

FONTS_URL=${FONTS_URL:-"smc/fonts"}
# Convert slash to %2F
FONTS_SLUG=${FONTS_URL/\//%2F}

mkdir -p downloads/fonts
cd downloads/fonts || exit
fonts=(anjalioldlipi rachana meera manjari raghumalayalamsans dyuthi keraleeyam uroob chilanka karumbi)
for font in "${fonts[@]}"; do
        mkdir "$font"
        cd "$font" || exit
        version=$(curl -sSL "https://gitlab.com/api/v4/projects/${FONTS_SLUG}%2F${font}/repository/tags"| jq '.[].name' | grep -i version | sort -V | tail -1 | tr -d '"')
        echo "$font : $version"
        wget -q "https://gitlab.com/${FONTS_URL}/${font}/-/jobs/artifacts/${version}/download?job=build-tag" -O artifacts.zip
        unzip -q artifacts.zip
        rm artifacts.zip
        mv build/* .
        rm -rf build
        cd ../ || exit
done

zip -qr fonts-smc.zip . -i "*.ttf" -j
