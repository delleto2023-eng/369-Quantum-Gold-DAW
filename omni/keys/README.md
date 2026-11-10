# 369 Keys Folder
- Copy `.env.example` to `.env` and paste your keys. `.env` is git-ignored.
- OPENROUTER_API_KEY alone unlocks all 17 models. Direct provider keys are used first when present. No keys = free local Qwen via Ollama.
- OMNI_GATEWAY_TOKEN = your own password so only your devices can use the gateway.
- Browser page keeps keys only in that device's storage; use Export/Import (passphrase-encrypted) to move them between devices.
