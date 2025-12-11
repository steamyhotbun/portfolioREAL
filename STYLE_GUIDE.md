# Quick Reference: Using Global Styles

## Import in SCSS Files

Add these imports at the top of your SCSS files:

```scss
@import '../../styles/globals/variables';
@import '../../styles/globals/mixins';

// Your styles here
.myComponent {
  background: $primary;
}
```

**Note:** Adjust the path (`../../` or `../`) based on your file location relative to `src/styles/globals/`

## Common Variables

### Colors
```scss
$primary          // #b9a6e6 (main purple)
$primary-border   // rgba(185, 166, 230, 0.3)
$bg-card          // rgba(35, 33, 41, 0.9)
$text-primary     // #b9a6e6
$text-muted       // rgba(185, 166, 230, 0.6)
```

### Spacing
```scss
$spacing-xs       // 8px
$spacing-sm       // 12px
$spacing-md       // 16px
$spacing-lg       // 24px
$spacing-xl       // 32px
```

### Border Radius
```scss
$radius-sm        // 6px
$radius-md        // 12px
$radius-lg        // 18px
$radius-xl        // 20px
$radius-2xl       // 24px
```

### Transitions
```scss
$transition-fast    // 0.1s ease
$transition-normal  // 0.2s ease
$transition-smooth  // 0.3s ease
```

## Common Mixins

### Responsive Design
```scss
.myComponent {
  padding: $spacing-xl;
  
  @include responsive(mobile) {
    padding: $spacing-md;
  }
}
```

Breakpoints: `mobile-sm` (480px), `mobile` (768px), `tablet` (992px), `desktop` (1200px)

### Card Styling
```scss
.myCard {
  @include card-base;  // Background, border, backdrop-filter
  @include hover-glow; // Adds hover glow effect
}
```

### Layout
```scss
.centered {
  @include flex-center;  // Centers content with flexbox
}

.overlay {
  @include absolute-fill;  // position: absolute with full coverage
}
```

### Effects
```scss
.glass {
  @include glassmorphism;  // Glass morphism effect
}

.input {
  @include input-base;  // Standard input styling
}
```

### Desktop-Only Transforms
```scss
.item {
  @include skew-desktop(-8deg);  // Skews on desktop, none on mobile
}

.image {
  @include counter-skew-desktop(8deg);  // Counter-skew on desktop
}
```

## Example Component

```scss
.myComponent {
  @include card-base;
  padding: $spacing-lg;
  margin: $spacing-md;
  border-radius: $radius-xl;
  transition: all $transition-smooth;
  
  &:hover {
    box-shadow: $shadow-glow-strong;
  }
  
  .title {
    color: $primary;
    margin-bottom: $spacing-sm;
  }
  
  @include responsive(mobile) {
    padding: $spacing-md;
    margin: $spacing-sm;
  }
}
```

## Path Aliases (JavaScript/JSX)

Use these in your import statements:

```javascript
import Component from '@components/MyComponent'
import { data } from '@data/myData.json'
import image from '@assets/image.png'
import '@styles/globals/index.scss'
```

Available aliases:
- `@` → `./src`
- `@components` → `./src/components`
- `@pages` → `./src/pages`
- `@assets` → `./src/assets`
- `@styles` → `./src/styles`
- `@data` → `./src/data`
- `@contexts` → `./src/contexts`
