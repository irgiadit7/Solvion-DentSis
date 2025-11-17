# 🤖 AI Dentist SaaS

Selamat datang di repositori AI Dentist SaaS! Sebuah platform Software as a Service (SaaS) revolusioner yang dirancang untuk membawa kekuatan kecerdasan buatan (AI) ke praktik kedokteran gigi modern.

![Akses Cepat](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![Akses Cepat](https://img.shields.io/badge/React-18-blue?logo=react)
![Akses Cepat](https://img.shields.io/badge/Tailwind_CSS-3-cyan?logo=tailwindcss)
![Akses Cepat](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Akses Cepat](https://img.shields.io/badge/Prisma-5-darkcyan?logo=prisma)

---

## 📜 Deskripsi

AI Dentist SaaS adalah solusi lengkap untuk klinik gigi yang ingin mengoptimalkan operasi mereka menggunakan AI. Mulai dari analisis diagnostik berbantuan AI hingga manajemen janji temu yang mulus, platform ini bertujuan untuk menjadi asisten cerdas bagi para profesional gigi.

Proyek ini dibangun menggunakan tumpukan teknologi modern untuk memastikan kinerja tinggi, skalabilitas, dan pengalaman pengguna yang luar biasa.

## ✨ Fitur Utama (Dalam Pengembangan)

* **Analisis Diagnostik AI:** (Fitur yang Diusulkan) Mengunggah gambar rontgen atau pindaian gigi untuk mendapatkan analisis dan deteksi masalah awal yang didukung AI.
* **Manajemen Janji Temu:** Sistem pemesanan dan penjadwalan janji temu yang intuitif untuk pasien dan staf administrasi.
* **Dasbor Klinik:** Dasbor analitik untuk dokter gigi memantau jadwal, data pasien, dan wawasan yang dihasilkan AI.
* **Manajemen Data Pasien:** Penyimpanan data pasien yang aman dan terstruktur menggunakan Prisma.
* **Antarmuka Responsif:** UI yang bersih dan modern dibangun dengan Tailwind CSS, dapat diakses di semua perangkat.

## 🛠️ Tech stack

* **Framework:** [Next.js](https://nextjs.org/)
* **Library UI:** [React](https://reactjs.org/)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **ORM / Database:** [Prisma](https://www.prisma.io/)
* **Manajemen State:**  Zustand, Redux, Context API
* **Autentikasi:** NextAuth.js, Clerk

## 🚀 Memulai

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Clone repositori:**
    ```bash
    git clone [URL_REPOSITORI_ANDA_DI_SINI]
    cd ai-dentist-saas
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

3.  **Siapkan Variabel Lingkungan:**
    Buat file `.env` di root proyek dan tambahkan `DATABASE_URL` Anda untuk Prisma.
    ```env
    DATABASE_URL="postgresql://user:password@host:port/database"
    ```

4.  **Migrasi Database:**
    Terapkan skema database menggunakan Prisma.
    ```bash
    npx prisma db push
    # atau jika Anda menggunakan migrasi:
    # npx prisma migrate dev
    ```

5.  **Jalankan server pengembangan:**
    ```bash
    npm run dev
    ```

6.  Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📸 Screenshot

<p align="center">
  <img src="/public/screenshot-for-readme.png" alt="Tangkapan Layar Aplikasi AI Dentist SaaS" width="80%">
</p>

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat *Pull Request* atau buka *Issue* untuk mendiskusikan apa yang ingin Anda ubah.
