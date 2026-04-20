# Design & Naming Guidelines for **Auto‑Notify App**

## 1. Naming Conventions
- Repo & root folder: `auto-notify-app`
- App name (store): `AutoNotify`
- Android package: `ru.hzname.autonotify`
- iOS bundle ID: `ru.hzname.autonotify`
- Directories: kebab-case (`src/components`, `src/screens`)
- React components: PascalCase, prefixed `App` (`AppLoginScreen`, `AppButtonPrimary`)
- Constants / enums: SCREAMING_SNAKE_CASE (`API_BASE_URL`)
- CSS‑in‑JS / styles: camelCase (`buttonPrimary`)
- API URLs: kebab-case, `/v1/` prefix (`POST /v1/vehicles/:plate/transfer`)
- DB tables: snake_case singular (`users`, `vehicles`)
- i18n keys: dot notation (`login.title`, `vehicle.addSuccess`)
- Push payload: camelCase JSON (`messageId`, `pushType`)

## 2. UI Component Naming (examples)
| Element          | File                     | Export                   |
|------------------|--------------------------|--------------------------|
| Primary button   | `AppButtonPrimary.tsx`   | `AppButtonPrimary`       |
| Text input       | `AppInput.tsx`           | `AppInput`               |
| Header / AppBar  | `AppHeader.tsx`          | `AppHeader`              |
| Vehicle card     | `VehicleCard.tsx`        | `VehicleCard`            |
| Message card     | `MessageCard.tsx`        | `MessageCard`            |
| Transfer modal   | `TransferRequestModal.tsx`| `TransferRequestModal`   |

All components reside in `src/components/` and export a default.

## 3. Screen Naming (React‑Navigation)
Screens in `src/screens/`, prefixed with `App`:
- `AppLoginScreen`
- `AppVehicleListScreen`
- `AppAddVehicleScreen`
- `AppCreateMessageScreen`
- `AppMessageDetailScreen`
- `AppSettingsScreen`

Navigation route names use kebab‑case (`login`, `vehicle-list`, `add-vehicle`, `create-message`, `message-detail`, `settings`).

## 4. Color Palette (Yandex brand + neutral)
```json
{
  "primary": "#2E8BFA",
  "primaryDark": "#1565C0",
  "background": "#F5F5F5",
  "backgroundDark": "#121212",
  "text": "#212121",
  "error": "#D32F2F",
  "success": "#388E3C"
}
```
- Use **primary** for action buttons.
- Errors → **error** (red), successes → **success** (green).
- Light theme: `text` on `background`; Dark theme: white on `backgroundDark`.

## 5. Typography
- Font family: `Roboto` (regular) / `Roboto Condensed` (headings).
- Scale:
  - Title – 24 sp, weight 600
  - Subtitle – 18 sp, weight 500
  - Body – 14 sp, weight 400
  - Caption – 12 sp, weight 300

## 6. Layout & Spacing (dp)
| Element          | Size |
|------------------|------|
| Screen container | 16 dp all sides |
| Card inner padding| 12 dp |
| Button height    | 48 dp |
| Icon size        | 24 dp |
| Divider thickness| 1 dp |

All follow Material Design.

## 7. Internationalisation (i18n)
- Files: `src/locale/ru.json`, `src/locale/en.json`.
- Keys: dot‑notation hierarchy (`login.title`, `vehicle.addSuccess`).
- Access via helper `t(key)` reading current language from Redux store.
- When adding UI text, update **both** language files (English can be placeholder ok).

## 8. Interaction Flow (textual)
1. **Login → Vehicle List** – user opens app → `AppLoginScreen` → OAuth → token → navigate to `AppVehicleListScreen`.
2. **Add Vehicle** – tap **+** → `AppAddVehicleScreen` → capture plate → OCR → confirm → `POST /v1/vehicles` → success → back to list.
3. **Send Notification** – select vehicle → `AppCreateMessageScreen` → photo + text → `POST /v1/messages` → push → toast.
4. **Receive Notification** – Yandex Cloud Messaging push → system notification → tap → `AppMessageDetailScreen`.
5. **Transfer Ownership** – duplicate plate detection → backend creates transfer request → owner receives push with `TransferRequestModal` → actions: Transfer, Share, Reject → backend updates ownership/shares.

## 9. Asset Naming
- Icons: `icon-<name>.svg` (e.g., `icon-car.svg`).
- Images: `assets/` lower‑case, hyphenated (`banner-welcome.png`).
- Splash screens: `splash-android.png`, `splash-ios.png`.

## 10. Git Workflow (contributors)
1. Branch naming – `feature/<kebab-case>`, `bugfix/<kebab-case>`, `hotfix/<kebab-case>`.
2. Commit messages – `type(scope): short description` (e.g., `feat(auth): add Yandex OAuth`).
3. PR template – requires *Design Review* checkbox for any UI changes.

---
*Keep this file up‑to‑date. Any deviation requires PR review.*
