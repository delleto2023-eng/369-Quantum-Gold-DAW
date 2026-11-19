@echo off
cd /d "%~dp0"
echo Joining 369 OMNI v28...
copy /b 369-OMNI-v28-Desktop.zip.part00+369-OMNI-v28-Desktop.zip.part01+369-OMNI-v28-Desktop.zip.part02+369-OMNI-v28-Desktop.zip.part03+369-OMNI-v28-Desktop.zip.part04+369-OMNI-v28-Desktop.zip.part05+369-OMNI-v28-Desktop.zip.part06+369-OMNI-v28-Desktop.zip.part07+369-OMNI-v28-Desktop.zip.part08 369-OMNI-v28-Desktop.zip
powershell -NoProfile -Command "Expand-Archive -Force 369-OMNI-v28-Desktop.zip v28"
echo Done. Open v28\369-OMNI-Desktop\369 OMNI Desktop.bat
pause
