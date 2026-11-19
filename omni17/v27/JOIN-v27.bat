@echo off
cd /d "%~dp0"
echo Joining v26 base...
copy /b 369-OMNI-v26-Desktop.zip.part00+369-OMNI-v26-Desktop.zip.part01+369-OMNI-v26-Desktop.zip.part02+369-OMNI-v26-Desktop.zip.part03+369-OMNI-v26-Desktop.zip.part04+369-OMNI-v26-Desktop.zip.part05+369-OMNI-v26-Desktop.zip.part06+369-OMNI-v26-Desktop.zip.part07+369-OMNI-v26-Desktop.zip.part08+369-OMNI-v26-Desktop.zip.part09 v26.zip
echo Joining v27 add-on...
copy /b 369-OMNI-v27-addon.zip.part* v27addon.zip
powershell -NoProfile -Command "Expand-Archive -Force v26.zip v27; Expand-Archive -Force v27addon.zip v27"
del v26.zip v27addon.zip
echo Done. Open v27\369-OMNI-Desktop\369 OMNI Desktop.bat
pause
