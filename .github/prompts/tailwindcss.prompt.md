---
mode: agent
description: "Rules and guidelines for using Tailwind CSS v4 in this project. (always refer to this when writing or updating styles)"
---

# Tailwind CSS v4

File: /styles/\*.css

## Core Changes

- **CSS-first configuration**: Configuration is now done in CSS instead of JavaScript

  - Use `@theme` directive in CSS
  - Example:

    ```css
    @import "tailwindcss";

    @theme {
      --font-display: "Satoshi", "sans-serif";
      --breakpoint-3xl: 1920px;
      --color-avocado-500: oklch(0.84 0.18 117.33);
      --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
    }
    ```

  ```css
  @import "tailwindcss";
  ```

- **CSS import syntax**: Use `@import "tailwindcss"` instead of `@tailwind` directives

  - Old: `@tailwind base; @tailwind components; @tailwind utilities;`
  - New: `@import "tailwindcss";`

- **Native CSS cascade layers**: Uses real CSS `@layer` instead of Tailwind's custom implementation

## Theme Configuration

- **CSS theme variables**: All design tokens are available as CSS variables

  - Namespace format: `--category-name` (e.g., `--color-blue-500`, `--font-sans`)
  - Access in CSS: `var(--color-blue-500)`
  - Available namespaces:
    - `--color-*` : Color utilities like `bg-red-500` and `text-sky-300`
    - `--font-*` : Font family utilities like `font-sans`
    - `--text-*` : Font size utilities like `text-xl`
    - `--font-weight-*` : Font weight utilities like `font-bold`
    - `--tracking-*` : Letter spacing utilities like `tracking-wide`
    - `--leading-*` : Line height utilities like `leading-tight`
    - `--breakpoint-*` : Responsive breakpoint variants like `sm:*`
    - `--container-*` : Container query variants like `@sm:*` and size utilities like `max-w-md`
    - `--spacing-*` : Spacing and sizing utilities like `px-4` and `max-h-16`
    - `--radius-*` : Border radius utilities like `rounded-sm`
    - `--shadow-*` : Box shadow utilities like `shadow-md`
    - `--inset-shadow-*` : Inset box shadow utilities like `inset-shadow-xs`
    - `--drop-shadow-*` : Drop shadow filter utilities like `drop-shadow-md`
    - `--blur-*` : Blur filter utilities like `blur-md`
    - `--perspective-*` : Perspective utilities like `perspective-near`
    - `--aspect-*` : Aspect ratio utilities like `aspect-video`
    - `--ease-*` : Transition timing function utilities like `ease-out`
    - `--animate-*` : Animation utilities like `animate-spin`

- **Simplified theme configuration**: Many utilities no longer need theme configuration

  - Utilities like `grid-cols-12`, `z-40`, and `opacity-70` work without configuration
  - Data attributes like `data-selected:opacity-100` don't need configuration

- **Dynamic spacing scale**: Derived from a single spacing value

  - Default: `--spacing: 0.25rem`
  - Every multiple of the base value is available (e.g., `mt-21` works automatically)

- **Overriding theme namespaces**:

  - Override entire namespace: `--font-*: initial;`
  - Override entire theme: `--*: initial;`

  - `field-sizing-content` for auto-resizing textareas
  - `scheme-light`, `scheme-dark` for `color-scheme` property
  - `font-stretch-*` utilities for variable fonts

## Breaking Changes

- **Removed deprecated utilities**:

  - `bg-opacity-*` → Use `bg-black/50` instead
  - `text-opacity-*` → Use `text-black/50` instead
  - And others: `border-opacity-*`, `divide-opacity-*`, etc.

- **Renamed utilities**:

  - `shadow-sm` → `shadow-xs` (and `shadow` → `shadow-sm`)
  - `drop-shadow-sm` → `drop-shadow-xs` (and `drop-shadow` → `drop-shadow-sm`)
  - `blur-sm` → `blur-xs` (and `blur` → `blur-sm`)
  - `rounded-sm` → `rounded-xs` (and `rounded` → `rounded-sm`)
  - `outline-none` → `outline-hidden` (for the old behavior)

- **Syntax changes**:

  - CSS variables in arbitrary values: `bg-(--brand-color)` instead of `bg-[--brand-color]`
  - Stacked variants now apply left-to-right (not right-to-left)
  - Use CSS variables instead of `theme()` function

- **Legacy config files**:

  ```css
  @import "tailwindcss";
  ```

## Style for components with Tailwind CSS v4

- If the variable is defined in the CSS `@theme` section, use it via tailwind utilities. (Important: do not use `var(--color-*)` directly in the component code).

Example:

```css
/* Tailwind configured in src/*.css*/
@theme {
  --color-primary-500: oklch(0.65 0.25 240);
}
```

Use in component:

```tsx
<button className="bg-primary-500 text-white px-4 py-2 rounded">Click Me</button>

<!-- please use `bg-primary-500` to apply the primary color defined in the theme. -->
```

Notes: Avoid use of arbitrary values like `bg-[var(--color-primary-500)]`, instead use the defined utility class `bg-primary-500`.
