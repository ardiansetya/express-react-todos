# Aplikasi Todo List dengan Fitur Login

![Todo List Icon](https://img.icons8.com/ios/50/000000/todo-list.png)

Aplikasi Todo List dengan fitur login menggunakan **Express.js**, **React**, **Prisma**, **PostgreSQL**, dan **JWT** untuk otentikasi pengguna. Aplikasi ini memungkinkan pengguna untuk mengelola daftar tugas mereka dengan fitur login yang aman.

## Fitur
- **Login & Register**: Pengguna dapat mendaftar dan masuk menggunakan JWT untuk otentikasi.
- **CRUD Todo**: Menambah, melihat, mengedit, dan menghapus tugas.
- **Otentikasi**: Menggunakan JWT untuk memastikan hanya pengguna yang terautentikasi yang dapat mengakses data mereka.

## Tech Stack
- **Frontend**: React, Axios
- **Backend**: Express.js, JWT
- **Database**: PostgreSQL, Prisma ORM
- **Authentication**: JWT (JSON Web Token)

## Prasyarat
Sebelum memulai, pastikan Anda memiliki hal berikut:
- Node.js (v14.x atau lebih tinggi)
- PostgreSQL
- npm atau yarn
- Prisma CLI

## Instalasi

### Backend (Express.js)

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/todo-list-app.git
   cd todo-list-app/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Konfigurasi `.env` untuk menghubungkan ke database PostgreSQL:
   ```env
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/TODO_APP?schema=public
   JWT_SECRET=your_jwt_secret
   ```

4. Jalankan Prisma untuk memigrasikan database:
   ```bash
   npx prisma migrate dev
   ```

5. Jalankan server backend:
   ```bash
   npm run dev
   ```

### Frontend (React)

1. Pindah ke direktori frontend:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan aplikasi frontend:
   ```bash
   npm start
   ```

Aplikasi akan berjalan di `http://localhost:3000`.

## Penggunaan
- Untuk login, masukkan kredensial yang sudah didaftarkan.
- Setelah login, Anda dapat menambah, mengedit, dan menghapus tugas di halaman utama.


