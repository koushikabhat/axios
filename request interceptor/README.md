# 02 - Axios Request Interceptor

## 🎯 What You Learn Here
- What a request interceptor is
- How to modify every outgoing request
- Adding custom headers (Authorization, App-Version, Language)
- Logging outgoing requests

---

## 📌 What Is a Request Interceptor?
Just like "middleware before the request is sent".

Every axios request passes through the interceptor → then goes to server.

Useful for:
- Automatically adding Authorization tokens
- Adding app metadata
- Modifying content-type
- Adding timestamps
- Logging requests

---

## 📄 Example Flow
User writes:

```js
api.get("/posts");
