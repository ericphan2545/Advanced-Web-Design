# Project CRUD Node + Express + Sequelize + React (Dev source)

Hướng dẫn nhanh cho sinh viên — Tiếng Việt.

## Yêu cầu
- Node.js (>=16), npm
- MySQL (tạo database `shop_db`)

## Cấu hình MySQL
- Tên DB: shop_db
- User: root
- Password: (để trống)

## Backend (port 3001)
1. Mở terminal ở thư mục `backend`:

   ```bash
   cd backend
   ```

2. Cài dependencies:

   ```bash
   npm install
   ```

3. Tạo database (nếu chưa có):

   ```sql
   CREATE DATABASE shop_db;
   ```

4. Chạy migration:

   ```bash
   npx sequelize-cli db:migrate
   ```

5. Chạy seed (thêm dữ liệu mẫu):

   ```bash
   npx sequelize-cli db:seed:all
   ```

6. Chạy server:

   ```bash
   npm run dev
   ```

## Frontend (React - port 3000)

1. Mở terminal ở thư mục `frontend`:

   ```bash
   cd frontend
   ```

2. Cài dependencies:

   ```bash
   npm install
   ```

3. Chạy app React (dev):

   ```bash
   npm start
   ```

## Test
- Backend API: http://localhost:3001/api/products
- Frontend: http://localhost:3000

## Ghi chú
- Ảnh upload lưu tại `backend/public/uploads` và được truy xuất tại `http://localhost:3001/uploads/<filename>`
- Nếu sequelize-cli không đọc `.env`, kiểm tra `config/config.js` — đã cấu hình đọc process.env
- Để deploy, build frontend bằng `npm run build` trong thư mục `frontend` và phục vụ static files.

Chúc các em học tốt — gặp bug thì xem log trước khi khóc 😎
