# Auto‑Notify App

## Overview
A free **iOS + Android** app that lets anyone quickly inform a vehicle owner that their car is blocking a driveway, needs cleaning, or any other situation. The owner receives a **push notification** via Yandex Cloud Messaging.

## Features (MVP)
- OAuth login via **Yandex ID** (VK, СБЕР ID, ЕСИА placeholders).
- Multiple vehicles per user (license‑plate OCR, on‑device).
- Send / receive push notifications (Yandex Cloud Messaging).
- Consent checkbox (GDPR / Russian data‑law compliant).
- Dark / Light mode, i18n (RU / EN).

## Repository structure
```
auto-notify-app/
├─ app/                # Expo React‑Native scaffold (frontend)
│   ├─ src/            # TS sources, components & screens
│   └─ package.json    # Frontend deps (expo‑auth‑session added)
├─ backend/            # Minimal Express API (auth, consent)
│   ├─ src/
│   │   ├─ index.js
│   │   ├─ routes/auth.js
│   │   └─ routes/consent.js
│   ├─ package.json    # Backend deps
│   └─ .env.example    # Env‑vars for OAuth providers
├─ docs/
│   └─ design.md      # Naming conventions, UI guidelines
└─ README.md           # This file
```

## Getting started (dev)
### Frontend
```bash
cd app
npm install          # installs expo, react‑native & expo‑auth‑session
npm start            # expo dev server
```
- Replace `YOUR_YANDEX_CLIENT_ID` in `src/screens/AppLoginScreen.tsx` with a real client ID.
- If using a custom scheme, set it in `app.json` and uncomment the `scheme` line in the file.

### Backend (local testing)
```bash
cd backend
cp .env.example .env   # fill in real client secrets or dummy values for dev
npm install
npm run dev            # starts on http://localhost:3000
```
- `/api/auth/yandex` exchanges the auth `code` for an access token.
- `/api/consent` stores the user's consent (in‑memory now, replace with DB later).

## Architecture notes
- **Frontend → Backend**: After a successful Yandex OAuth flow the app posts the received `code` to the backend, which performs the token exchange (keeps client secret on the server). The backend returns the token, which we temporarily use as `userId` for demo purposes.
- **Consent handling**: Immediately after login we POST to `/api/consent` to persist the user's agreement.
- **Push notifications**: Not covered in this commit; Yandex Cloud Messaging integration will be added once the backend can register device tokens.

## Next steps (to‑do)
- Implement VK, СБЕР, ЕСИА OAuth routes (currently placeholders).
- Persist users and consents in PostgreSQL (`backend/src/models/...`).
- Add device‑token registration endpoint and YCM integration.
- Write comprehensive integration tests for the auth flow.
- Harden security: validate redirect URIs, CSRF protection, rate limiting.

## License
MIT – feel free to fork and adapt.
