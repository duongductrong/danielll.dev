# Theme Color System

## Overview
Add 3 color themes (Dark/Amber/Blue) with a dot-circle switcher in top-right header. Themes affect both page chrome AND badge card SVGs. Default: Dark (current).

## Phases

### Phase 1: CSS Theme Variables ✅
- Add `.amber` and `.blue` theme classes to `styles.css` alongside existing `.dark`
- Define CSS custom properties for card SVG colors (card-bg, card-border, card-text, etc.)

### Phase 2: Theme Infrastructure
- Create `useTheme` hook with localStorage persistence
- Wire into `__root.tsx` to apply class on `<html>`

### Phase 3: UI Components
- Build `ThemeSwitcher` color dot component
- Add to HomePage top-right

### Phase 4: Card Theming
- Replace hardcoded SVG hex colors with CSS variable references in badge cards
- Support all 3 themes

## Files Modified
- `src/styles.css` — theme CSS variables
- `src/hooks/use-theme.ts` — theme hook
- `src/components/theme-switcher.tsx` — dot switcher UI
- `src/routes/__root.tsx` — provider wiring
- `src/routes/index.tsx` — header layout
- `src/features/home/components/conference-badge-card.tsx` — themed card front
- `src/features/home/components/conference-badge-card-back.tsx` — themed card back
