@echo off
copy /b 369-OMNI-v29-addon.zip.part00+369-OMNI-v29-addon.zip.part01+369-OMNI-v29-addon.zip.part02+369-OMNI-v29-addon.zip.part03+369-OMNI-v29-addon.zip.part04+369-OMNI-v29-addon.zip.part05+369-OMNI-v29-addon.zip.part06+369-OMNI-v29-addon.zip.part07+369-OMNI-v29-addon.zip.part08+369-OMNI-v29-addon.zip.part09+369-OMNI-v29-addon.zip.part10 369-OMNI-v29-addon.zip
if not exist 369-OMNI-Desktop mkdir v28
powershell -command "Expand-Archive -Force 369-OMNI-v29-addon.zip v28"
echo v29 laid over v28 folder.
pause
