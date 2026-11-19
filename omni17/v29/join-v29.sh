#!/bin/sh
cat 369-OMNI-v29-addon.zip.part* > 369-OMNI-v29-addon.zip && sha256sum -c SHA256.txt; unzip -o 369-OMNI-v29-addon.zip -d v28
