# Embergine

Clinical reasoning encounters (Tangerine) and real-time cardiac arrest simulation (Ember) in one installable app, scored against the AHA 2025 and ERC 2025 guidelines.

Open **https://embergine.github.io/embergine/** on your phone: Safari → Share → *Add to Home Screen*; Chrome → menu → *Install app*. Works offline after the first visit.

**Google & Citrus:** Settings → *Sign in with Google*. Progress is kept in Google Drive at `My Apps/hub/embergine/state.json`, the hub snapshot for Citrus Maxima at `My Apps/hub/embergine/status.json`, and Citrus's plan is read from `My Apps/hub/citrus/plan.json`. One-time setup in the Google Cloud console: add `https://embergine.github.io` to the authorised JavaScript origins of the shared *Citrus web* client.

In the claude.ai copy the AI patient and the AI case generator work (they use the viewer's own Claude); in the installed copy Google Drive works. Both share progress through the Settings → Backup JSON or through Drive.

Build e4ef8e8f45. Built from a single source (`index.html`).
