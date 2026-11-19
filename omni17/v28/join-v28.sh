#!/bin/sh
cd "$(dirname "$0")"
cat 369-OMNI-v28-Desktop.zip.part0* > 369-OMNI-v28-Desktop.zip && unzip -qo 369-OMNI-v28-Desktop.zip -d v28 && echo "Done: v28/369-OMNI-Desktop"
