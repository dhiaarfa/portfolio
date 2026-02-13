# How to Test Mobile Version on PC

## Method 1: Browser DevTools (Easiest & Best)

### Chrome/Edge:
1. **Open your website** in Chrome/Edge: `http://localhost:3000`
2. **Press F12** (or Right-click → Inspect)
3. **Click the device icon** (📱) in the top-left of DevTools, or press **Ctrl+Shift+M**
4. **Select device** from dropdown:
   - iPhone 12 Pro / iPhone 13 Pro
   - iPhone SE
   - Samsung Galaxy S20
   - iPad
   - Or enter custom dimensions
5. **Refresh the page** (F5) to see mobile layout
6. **Test interactions**: Click, scroll, navigate

### Firefox:
1. **Press F12** → Click **Responsive Design Mode** icon
2. **Select device** from dropdown
3. **Test your site**

### Safari (Mac):
1. **Enable Developer menu**: Preferences → Advanced → Show Develop menu
2. **Develop → Enter Responsive Design Mode**
3. **Select device** from dropdown

---

## Method 2: Resize Browser Window

1. **Open your website**
2. **Manually resize** browser window to narrow width (< 768px)
3. **Check responsive behavior**
4. **Note**: Less accurate than DevTools, but quick check

---

## Method 3: Browser Extensions

### Chrome Extensions:
- **Window Resizer** - Set exact viewport sizes
- **Responsive Viewer** - View multiple sizes at once

---

## What to Test on Mobile View

### ✅ Navigation
- [ ] Mobile menu opens/closes smoothly
- [ ] All links work
- [ ] Touch targets are large enough (44x44px minimum)
- [ ] No horizontal scrolling

### ✅ Layout
- [ ] Text is readable (not too small)
- [ ] Images fit properly
- [ ] Buttons are accessible
- [ ] Forms are usable
- [ ] Notes don't overlap hero text
- [ ] Gallery scrolls horizontally

### ✅ Performance
- [ ] Page loads quickly
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No layout shift

### ✅ Interactions
- [ ] Buttons respond to touch
- [ ] Forms submit correctly
- [ ] Links navigate properly
- [ ] WhatsApp/Behance buttons work

---

## Recommended Test Sizes

| Device | Width | Height | Use For |
|--------|-------|--------|---------|
| iPhone SE | 375px | 667px | Small phones |
| iPhone 12/13 | 390px | 844px | Modern phones |
| Samsung Galaxy | 360px | 800px | Android phones |
| iPad | 768px | 1024px | Tablets |
| iPad Pro | 1024px | 1366px | Large tablets |

---

## Quick Checklist

1. ✅ Open DevTools (F12)
2. ✅ Toggle device mode (Ctrl+Shift+M)
3. ✅ Select iPhone 12 Pro
4. ✅ Refresh page (F5)
5. ✅ Test navigation, forms, buttons
6. ✅ Check all pages (Home, About, Designer, Trainer, Developer)
7. ✅ Verify notes positioning
8. ✅ Test gallery scrolling

---

## Pro Tips

- **Throttle network**: DevTools → Network → Throttle to "3G" to test slow connections
- **Touch simulation**: Enable touch events in DevTools
- **Multiple devices**: Test on different sizes
- **Orientation**: Test portrait and landscape
- **Real device**: After testing on PC, test on actual phone for final verification

---

**Now you can test mobile version directly from your PC!** 📱
