# DevTeam Website - Design System & Figma Guide

## 🎨 Color Palette

### Primary Colors
- **Blue Primary**: `#1e40af` (rgb(30, 64, 175))
- **Blue Secondary**: `#3b82f6` (rgb(59, 130, 246))
- **Purple**: `#8b5cf6` (rgb(139, 92, 246))
- **Indigo**: `#6366f1` (rgb(99, 102, 241))

### Accent Colors
- **Green**: `#10b981` (rgb(16, 185, 129))
- **Orange**: `#f59e0b` (rgb(245, 158, 11))
- **Pink**: `#ec4899` (rgb(236, 72, 153))
- **Teal**: `#06b6d4` (rgb(6, 182, 212))

### Neutral Colors
- **Gray 50**: `#f9fafb`
- **Gray 100**: `#f3f4f6`
- **Gray 200**: `#e5e7eb`
- **Gray 500**: `#6b7280`
- **Gray 900**: `#111827`
- **White**: `#ffffff`
- **Black**: `#000000`

## 📝 Typography

### Font Families
1. **Headings (H1-H3)**: Playfair Display
2. **Subheadings (H4-H6)**: Inter
3. **Body Text**: Poppins
4. **UI Elements**: Inter

### Font Sizes
- **H1**: 48px (3rem) - Desktop, 32px (2rem) - Mobile
- **H2**: 40px (2.5rem) - Desktop, 28px (1.75rem) - Mobile
- **H3**: 32px (2rem) - Desktop, 24px (1.5rem) - Mobile
- **H4**: 24px (1.5rem)
- **Body Large**: 20px (1.25rem)
- **Body**: 16px (1rem)
- **Small**: 14px (0.875rem)
- **Tiny**: 12px (0.75rem)

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## 🎯 Component Specifications

### Buttons

#### Primary Button
- **Background**: Linear gradient from `#3b82f6` to `#8b5cf6`
- **Text Color**: White
- **Padding**: 12px 24px
- **Border Radius**: 8px
- **Font**: Poppins Medium 16px
- **Hover**: Opacity 90%

#### Secondary Button
- **Background**: Transparent
- **Border**: 2px solid `#e5e7eb`
- **Text Color**: `#374151`
- **Padding**: 12px 24px
- **Border Radius**: 8px
- **Font**: Poppins Medium 16px

### Cards
- **Background**: White
- **Border Radius**: 12px
- **Shadow**: 0 4px 6px rgba(0, 0, 0, 0.1)
- **Padding**: 24px
- **Border**: None

### Navigation
- **Height**: 64px
- **Background**: White with 80% opacity + backdrop blur
- **Border Bottom**: 1px solid `#e5e7eb`
- **Logo Size**: 32px x 32px
- **Nav Links**: Poppins Medium 14px

## 📐 Layout & Spacing

### Container
- **Max Width**: 1200px
- **Padding**: 16px (Mobile), 24px (Desktop)

### Grid System
- **Columns**: 12-column grid
- **Gaps**: 24px (Desktop), 16px (Mobile)

### Spacing Scale
- **4px**: 0.25rem
- **8px**: 0.5rem
- **12px**: 0.75rem
- **16px**: 1rem
- **20px**: 1.25rem
- **24px**: 1.5rem
- **32px**: 2rem
- **48px**: 3rem
- **64px**: 4rem
- **80px**: 5rem

## 🎨 Gradients

### Primary Gradient
\`\`\`css
background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
\`\`\`

### Service Card Gradients
- **Web Dev**: `linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)`
- **Design**: `linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)`
- **Mobile**: `linear-gradient(135deg, #10b981 0%, #059669 100%)`
- **IoT**: `linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)`

## 🖼️ Component Layout

### Hero Section
- **Height**: 600px (Desktop), 500px (Mobile)
- **Background**: Gradient from `#eff6ff` to `#e0e7ff`
- **Content**: 2-column grid (Text + 3D Visual)

### Team Cards
- **Dimensions**: 400px x 500px
- **Layout**: 2x2 grid (Desktop), 1 column (Mobile)
- **Image**: 128px x 128px circular
- **Color Accent**: Top border 8px height

### Service Cards
- **Dimensions**: 350px x 400px
- **Layout**: 3-column grid (Desktop), 1 column (Mobile)
- **Icon**: 40px x 40px
- **Gradient Top Border**: 4px height

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🎭 Animations

### Hover Effects
- **Scale**: `transform: scale(1.05)`
- **Shadow**: Increase shadow intensity
- **Opacity**: Reduce to 90%

### Page Transitions
- **Fade In**: Opacity 0 to 1, Duration 0.5s
- **Slide Up**: translateY(20px) to 0, Duration 0.5s
- **Stagger**: Delay 0.1s between elements

## 🔧 Figma Setup Instructions

### 1. Create Color Styles
- Import all colors from the palette above
- Create gradient styles for buttons and cards

### 2. Typography Styles
- Set up text styles for all heading levels
- Create paragraph styles for body text
- Add button text styles

### 3. Component Library
- Create button components with variants
- Build card components
- Design navigation component
- Create form input components

### 4. Layout Grid
- Set up 12-column grid system
- Configure responsive breakpoints
- Add spacing guidelines

### 5. Assets
- Logo variations (light/dark)
- Icon library (Lucide React icons)
- Team member photos
- Placeholder images

## 📋 Page Structure

### Homepage Sections
1. **Navigation** (Sticky header)
2. **Hero Section** (Text + 3D logo)
3. **About Agency** (2-column layout)
4. **Stats Section** (6-column grid)
5. **Team Section** (2x2 grid)
6. **Services** (3-column grid)
7. **Skills** (Multi-column layout)
8. **Portfolio** (3-column grid with filters)
9. **Experience** (Timeline layout)
10. **Education** (2-column layout)
11. **Formations** (2x2 grid)
12. **Engagement** (2x2 grid)
13. **Testimonials** (Carousel)
14. **Contact** (2-column: info + form)
15. **Footer** (4-column layout)

This documentation should give you everything needed to recreate the design accurately in Figma!
