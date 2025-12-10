# 03 - Response Interceptor (Medium + Advanced)

This example combines both medium-level and advanced response handling:

---

# 🎯 Features Included

### ✔ Medium Features (B)
- Logs all successful and failed responses
- Handles common HTTP errors:
  - 400 — Bad Request  
  - 404 — Not Found  
  - 500 — Internal Server Error  
- Custom error messages
- Transforms the response to return `response.data` only

---

### ✔ Advanced Features (C)
- Detects expired tokens (401)
- Shows how to trigger:
  - logout  
  - or refresh-token flow (used in next examples)
- Clean and uniform error objects returned to UI
- Centralized error handling for entire app

---

# 📌 Why Response Interceptors Are Important

In a professional backend-connected app:

- Every request can succeed or fail  
- Every error needs a user-friendly message  
- You must detect expired tokens  
- You want clean, normalized responses in your UI  

This interceptor gives you:

✔ Standardized error format  
✔ Cleaner frontend code  
✔ Prepared refresh-token architecture  
✔ Debug logs  
✔ Perfect behavior for production apps  

---

# ▶️ Running the Example

```sh
node example.js
