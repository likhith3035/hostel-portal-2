# User Instructions: Clearing Stale Cache and Login Issues

## For End Users

If you're experiencing:
- Old content showing up
- Login problems
- Stale data

### Quick Fix - Browser Cache Clear

**Option 1: Hard Refresh (Recommended)**
1. **Windows/Linux**: Press `Ctrl + Shift + R`
2. **Mac**: Press `Cmd + Shift + R`
3. This forces a fresh reload without cache

**Option 2: Manual Cache Clear**

**Chrome/Edge:**
1. Press `Ctrl + Shift + Delete` (or `Cmd + Shift + Delete` on Mac)
2. Select "Cached images and files"
3. Time range: "All time"
4. Click "Clear data"

**Firefox:**
1. Press `Ctrl + Shift + Delete`  
2. Check "Cache"
3. Click "Clear Now"

**Safari:**
1. Press `Cmd + Option + E` to empty caches
2. Then reload the page

---

## For Developers/Admins

### Automatic Cache Clearing (Already Implemented)

The app now automatically:
- ✅ Deletes old caches when a new version is deployed
- ✅ Auto-reloads the page with fresh content
- ✅ Clears sessionStorage on update
- ✅ Shows toast notification when updates are available

### Manual Full Reset

If you need to completely reset a user's cache, add this button to the admin panel:

```html
<button onclick="clearAllCaches()" class="btn btn-danger">
    🗑️ Clear All Caches & Reload
</button>

<script src="/js/clear-cache.js"></script>
```

Or run this in the console:
```javascript
// Load the utility
const script = document.createElement('script');
script.src = '/js/clear-cache.js';
document.head.appendChild(script);

// Then run
clearAllCaches();
```

This will:
1. Delete all service worker caches
2. Unregister all service workers  
3. Clear localStorage and sessionStorage
4. Clear IndexedDB (Firestore offline cache)
5. Force reload the page

---

## Version History

- **v20**: Aggressive cache management + auto-reload
- **v19**: Fixed cache list (removed missing files)
- **v18**: Re-enabled service worker

---

## Deployment Note

When you deploy these changes, all users will automatically:
1. Download the new service worker
2. Clear old caches
3. See "App updated! Reloading..." toast  
4. Auto-reload with fresh content

**No manual intervention needed!**
