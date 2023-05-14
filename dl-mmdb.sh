#!/bin/bash

source .env
URL="https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-City&license_key=$MMDB_API_KEY&suffix=tar.gz"
wget -O "GeoLite2-City.tar.gz" "$URL"

tar -xvf "GeoLite2-City.tar.gz"
mv GeoLite2-City_2*/GeoLite2-City.mmdb "GeoLite2-City.mmdb"

rm -rf GeoLite2-City_2* GeoLite2*tar.gz
echo "Done!!"