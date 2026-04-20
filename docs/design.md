# Design & Naming Guidelines for **Auto‑Notify App**

## 1. Project Naming
- **Repository**: `auto-notify-app`
- **App name (store)**: `AutoNotify`
- **Package name (Android)**: `ru.hzname.autonotify`
- **Bundle ID (iOS)**: `ru.hzname.autonotify`
- **Internal modules** use **kebab‑case** for directories (`src/components`, `src/screens`) and **PascalCase** for React components (`AppLoginScreen`).
- **Constants / enums** – `SCREAMING_SNAKE_CASE` (`API_BASE_URL`).
- **CSS‑in‑JS / Styles** – `camelCase` (`buttonPrimary`).

## 2. UI Component Naming
| UI Element | Component Filename | Exported Name |
|------------|-------------------|--------------|
| Primary button | `AppButtonPrimary.tsx` | `AppButtonPrimary` |
| Text input | `AppInput.tsx` | `AppInput` |
| Header / AppBar | `AppHeader.tsx` | `AppHeader` |
| Vehicle card (list) | `VehicleCard.tsx` | `VehicleCard` |
| Message card | `MessageCard.tsx` | `MessageCard` |
| Modal for transfer request | `TransferRequestModal.tsx` | `TransferRequestModal` |

All components live inside `src/components/` and expose a **single default export**.

## 3. Screen Naming (React‑Navigation)
- Screens live in `src/screens/` and are prefixed with `App` (e.g. `AppLoginScreen`).
- Navigation routes use **kebab‑case** (`login`, `vehicle-list`, `add-vehicle`, `messages`, `create-message`, `settings`).

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
- Use the **primary** color for action buttons and accent elements.
- Errors use **error** (red), successes use **success** (green).
- All text defaults to `text` on light background; switch to `#FFFFFF` on dark mode.

## 5. Typography
- **Font family**: `Roboto` (regular) / `Roboto Condensed` (headings).
- **Scale**:
  - Header title – 24 sp, weight **600**.
  - Sub‑title – 18 sp, weight **500**.
  - Body – 14 sp, weight **400**.
  - Caption / hint – 12 sp, weight **300**.

## 6. Layout & Spacing
| Element | Margin / Padding (dp) |
|---------|-----------------------|
| Screen container | 16 dp all sides |
| Card inner padding | 12 dp |
| Button height | 48 dp |
| Icon size | 24 dp |
| Divider thickness | 1 dp |

All measurements follow **Material Design** guidelines.

## 7. Internationalisation (i18n)
- Store strings in `src/locale/<lang>.json` (`ru.json`, `en.json`).
- Keys use **dot notation** reflecting hierarchy, e.g. `login.title`, `vehicle.addSuccess`.
- Access via a thin wrapper `t(key)` that picks the current language from Redux store.
- When adding new UI text, **always** add the entry to **both** `ru.json` and `en.json` (English can be placeholder).

## 8. Interaction Flow Diagrams (textual description)
1. **Login → Vehicle List**
   - User opens the app → sees **LoginScreen** → selects OAuth provider → token stored → navigate to **VehicleListScreen**.
2. **Add Vehicle**
   - Tap **+** → **AddVehicleScreen** → camera captures license plate → OCR → user confirms → POST `/v1/vehicles` → success → return to list.
3. **Send Notification**
   - From **VehicleListScreen**, choose a vehicle → tap **Report Issue** → **CreateMessageScreen** → capture photo, write text → POST `/v1/messages` → push is sent → toast *Message sent*.
4. **Receive Notification**
   - Push arrives (Yandex Cloud Messaging) → app shows system notification → tapping opens **MessageDetailScreen** → user can reply.
5. **Transfer Ownership**
   - Another user attempts to add a plate that already belongs to someone else → backend creates a **transfer request** → owner receives a push with **TransferRequestModal** → chooses **Transfer**, **Share**, or **Reject** → backend updates `vehicles.owner_id` or `vehicle_shares` accordingly.

## 9. Asset Naming
- Icons: `icon-<name>.svg` (e.g. `icon-car.svg`).
- Images: placed in `assets/` with lower‑case, hyphenated names (`banner-welcome.png`).
- Splash screen assets follow Android/iOS naming conventions (`splash-android.png`, `splash-ios.png`).

## 10. Git Workflow (for contributors)
1. **Branch naming** – `feature/<kebab-case>`, `bugfix/<kebab-case>`, `hotfix/<kebab-case>`.
2. **Commit messages** – `type(scope): short description` (e.g. `feat(auth): add Yandex OAuth`).
3. **Pull request template** – ensure **Design Review** checkbox is ticked when UI changes are introduced.

---
*All designers and developers should keep this file up to date. Any deviation must be approved via a pull‑request review.*
