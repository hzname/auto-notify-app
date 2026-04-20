# Auto‑Notify App

**Mobile app for car owners notifications**

> A free iOS + Android app that lets anyone quickly inform a vehicle owner that their car is blocking a driveway, needs cleaning, or any other situation. The owner receives a push notification with a photo, license‑plate number, location and can respond directly.

## Features
- OAuth login via Yandex, VK, СБЕР ID, ЕСИА
- Add multiple vehicles (photo of the license plate → OCR)
- Send a notification with photo & short text
- Receive push notifications (Yandex Cloud Messaging)
- Family/shared access to a vehicle
- Automatic moderation via black‑lists
- Multilingual UI (RU + EN; easy i18n extension)

## Project Structure (high‑level)
```
auto-notify-app/
 ├─ app/                # Expo React‑Native scaffold
 │   ├─ assets/
 │   └─ ...
 ├─ docs/               # Design & naming guidelines
 ├─ .gitignore
 └─ README.md
```

## Getting Started (dev)

```bash
# Clone (already done)
cd auto-notify-app
# Install dependencies
npm install
# Run with Expo
npm start
```

## Contributing
All changes must follow the naming conventions in `docs/design.md`. Open a PR, run the CI, and ensure lint passes.

---
*This repository is a pet‑project built with React‑Native and Yandex services.*
