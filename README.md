# Auto‑Notify App

**Mobile app for car owners notifications**

> A free iOS + Android app that lets anyone quickly inform a vehicle owner that their car is blocking a driveway, needs cleaning, or any other situation. The owner receives a push notification with a photo, license‑plate number, location and can respond directly.

## Features
- OAuth login via Yandex, VK, SBER ID, ЕСИА
- Add multiple vehicles (photo of the license plate → OCR)
- Send a notification with photo & short text
- Receive push notifications (Yandex Cloud Messaging)
- Family/shared access to a vehicle
- Automatic moderation via black‑lists
- Multilingual UI (RU + EN; easy to extend)

## Project Structure
```
src/
 ├─ api/                # HTTP client wrappers
 ├─ components/         # Reusable UI components (Button, Card, …)
 ├─ screens/            # React‑Native screens
 ├─ store/              # Redux/Zustand slices
 ├─ locale/             # i18n JSON files
 └─ utils/              # OCR, push, validation helpers
```

## Getting Started
```bash
# Install dependencies
npm install
# Run the app (Expo)
npm start
```

## Contributing
Please follow the naming conventions and UI guidelines described in `docs/design.md`.

---
*This repository is part of a pet‑project built with React Native and Yandex services.*