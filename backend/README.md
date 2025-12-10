# Backend - Ziro (template)

Quick start:
1. copy `.env.example` -> `.env` and fill values
2. npm install
3. npm run dev

Notes:
- This is a starter template. Replace password placeholders with proper hashing (bcrypt).
- Add input validation, rate limiting and production-ready error handling before deploying.
- Socket namespace `/chat` is created; persist messages in controllers when receiving socket messages.
