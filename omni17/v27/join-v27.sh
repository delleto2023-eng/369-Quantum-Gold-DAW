#!/bin/sh
cd "$(dirname "$0")"
cat 369-OMNI-v26-Desktop.zip.part0* > v26.zip
cat 369-OMNI-v27-addon.zip.part* > v27addon.zip
unzip -oq v26.zip -d v27 && unzip -oq v27addon.zip -d v27 && rm v26.zip v27addon.zip
echo Done: v27/369-OMNI-Desktop
