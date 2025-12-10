# 01 - Axios Instance Example

## What This Example Teaches
- How to create an axios instance
- Why axios instances are used in real projects
- How to send GET and POST requests using the instance

---

## Why Use an Axios Instance?
In large apps, you need:
- one baseURL everywhere
- common timeout
- shared headers
- shared interceptors (later examples)

So instead of:

```js
axios.get("https://api.com/users")
