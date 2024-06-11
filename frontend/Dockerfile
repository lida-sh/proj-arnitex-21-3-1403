# استفاده از ایمیج Node.js 18
FROM node:18

# تعیین دایرکتوری کار
WORKDIR /app

# کپی کردن فایل‌های package.json و yarn.lock
COPY package*.json ./

# نصب پکیج‌ها
RUN npm install

# کپی کردن بقیه فایل‌های پروژه
COPY . .

# ساخت پروژه (برای تولید)
RUN npm run build

# اجرای پروژه
CMD ["npm", "start"]
