mkdir -p downloads/fonts
cd downloads/fonts || exit
fonts=(anjalioldlipi rachana meera manjari raghumalayalamsans dyuthi keraleeyam uroob chilanka karumbi)
for font in "${fonts[@]}"; do
        mkdir "$font"
        cd "$font" || exit
        version=$(curl -sSL "https://gitlab.com/api/v4/projects/smc%2Ffonts%2F${font}/repository/tags"| jq '.[0]["name"]' | tr -d '"')
        wget "https://gitlab.com/smc/fonts/${font}/-/jobs/artifacts/${version}/download?job=build-tag" -O artifacts.zip
        unzip artifacts.zip
        rm artifacts.zip
        mv build/* .
        rm -rf build
        cd ../ || exit
done

zip -r fonts-smc.zip . -i "*.ttf" -j
