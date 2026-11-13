# KOPI HALU — Landing Page Website UMKM Minuman Kopi Botolan

> **"Satu Botol, Banyak Cerita."**  
> *"Secangkir halu, sejuta rasa."* — Since 2024 by R.A

---

## 1. Deskripsi Project
**Kopi Halu** adalah website landing page resmi untuk UMKM minuman kopi botolan lokal yang berfokus pada penyajian kopi berkualitas premium, praktis, dan higienis dalam kemasan botol 250ml siap minum. 

Website ini dirancang khusus untuk mempresentasikan brand Kopi Halu secara modern, profesional, dan elegan dengan konsep visual *Premium Modern Minimalist Bottled Coffee*. Mengusung palet warna hangat khas kopi (*Coffee Brown, Dark Coffee, Caramel, Beige, dan Cream*), website ini ditargetkan untuk kalangan mahasiswa, pekerja kantoran, anak muda, dan pecinta kopi.

---

## 2. Tujuan Pembuatan
Website ini dibuat sebagai bagian dari **Tugas Project Kelompok UAS Mata Kuliah Pemrograman Web**.
Tujuan utamanya meliputi:
1. Memenuhi standar penilaian UAS dengan mengimplementasikan HTML5 semantik, CSS3 modern & responsif, serta Vanilla JavaScript interaktif tanpa dependensi framework backend/database.
2. Membantu UMKM Kopi Halu memiliki media promosi digital profesional yang siap dipublikasikan via **GitHub Pages**.
3. Menyediakan jalur pemesanan cepat dan mudah melalui integrasi **WhatsApp Direct Ordering** dengan pesan otomatis.

---

## 3. Teknologi yang Digunakan
Website ini dibangun secara murni menggunakan web standard modern (tanpa PHP/Node.js/Laravel/React):
- **HTML5**: Struktur semantik (`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
- **CSS3**: 
  - CSS Custom Properties (Design Tokens/Variables).
  - Modern Layouts (CSS Grid & Flexbox).
  - Glassmorphism & backdrop-filter effects.
  - Fluid typography (`clamp()`) dan Responsive Media Queries.
  - Micro-interactions & animations (Hover lift, scale zoom, marquee ticker).
- **JavaScript (Vanilla ES6+)**:
  - Sticky navbar & scroll threshold handler.
  - Active navigation indicator (ScrollSpy).
  - Mobile drawer hamburger toggle & backdrop blur.
  - Dynamic category filtering (Semua, Kopi Susu, Kopi Hitam, Non Kopi).
  - Product Quick View Modal & Image Lightbox.
  - Interactive WhatsApp Order Dispatcher dengan encoder pesan otomatis.
  - Scroll reveal animations menggunakan `IntersectionObserver`.
  - Floating back-to-top & floating WhatsApp button.
- **Google Fonts**: *Outfit*, *Plus Jakarta Sans*, dan *Playfair Display*.
- **Icon Library**: Font Awesome 6 (Free CDN).

---

## 4. Fitur Utama Website
1. **Sticky & Glassmorphism Navbar**: Navigasi responsif dengan logo Kopi Halu, smooth scroll link, hamburger drawer mobile, dan tombol CTA.
2. **Hero Section Editorial**: Headline memikat, visual botol kopi studio asli, trust metrics, dan floating badges.
3. **Brand Ticker Ribbon**: Animasi berjalan (marquee) nilai-nilai brand Kopi Halu.
4. **Tentang Kami (About Us)**: Narasi filosofi usaha, profil brand *Since 2024 by R.A*, serta tab interaktif untuk Visi, Misi, dan Filosofi Rasa.
5. **Katalog Produk / Menu Kopi**:
   - Menampilkan 6 produk kopi botolan sesuai foto **Daftar Menu Resmi Kopi Halu**:
     - **Kopi Halu (Susu Aren)**: Rp 15.000 *(Best Seller)*
     - **Kopi Halu Pandan**: Rp 17.000 *(Aroma Pandan Alami)*
     - **Kopi Hazelnut**: Rp 17.000 *(Sensasi Nutty Gurih)*
     - **Kopi Americano**: Rp 13.000 *(Hitam Pekat & Segar)*
     - **Matcha Latte**: Rp 17.000 *(Varian Non-Kopi)*
     - **Kopi Halu Extra Shot**: Rp 18.000 *(Extra 1 Shot Espresso +3k)*
   - Tombol preview gambar menu asli (**Daftar Menu Board**).
   - Filter varian instan (*All, Kopi Susu, Kopi Hitam, Non Kopi*).
   - Tombol pemesanan langsung WhatsApp pada setiap item kartu.
   - Tombol Quick View detail komposisi dan *tasting notes*.
   - Banner add-on **Extra Shoot (+Rp 3.000)**.
6. **Keunggulan (Why Choose Us)**: 4 pilar kualitas (*Selected Coffee Beans, Freshly Made, Practical Packaging, Affordable Quality*).
7. **Cara Pemesanan**: Panduan ringkas 3 langkah pesan dari smartphone.
8. **Galeri Produk (Lightbox)**: Foto studio asli kemasan botol Kopi Halu dengan fitur popup zoom.
9. **Testimoni Pelanggan**: 4 ulasan pelanggan (mahasiswa, pekerja, designer) lengkap dengan rating bintang dan status *Verified Buyer*.
10. **Kontak & Lokasi Terintegrasi**:
    - Alamat outlet/pickup point.
    - Link & Embed Google Maps (menuju tautan resmi UMKM).
    - Jam operasional dengan indikator status buka.
    - **Form Pemesanan Instan**: Mengubah input nama, nomor, varian, jumlah, dan catatan menjadi format pesan WhatsApp rapi hanya dengan satu klik.
11. **Footer Komprehensif**: Identitas brand, sitemap navigasi, shortcut menu, sosial media, dan copyright kelompok UAS.
12. **Floating Action Buttons**: Tombol WhatsApp mengambang dengan efek denyut notifikasi dan tombol Back-to-Top.

---

## 5. Struktur Folder Project

```text
kopi-halu/
│
├── index.html              # Halaman utama landing page (HTML5)
│
├── css/
│   └── style.css           # Styling lengkap, layout responsif, & tema warna
│
├── js/
│   └── script.js           # Logika interaktif, filter produk, modal, & WhatsApp order
│
├── images/                 # Seluruh aset visual asli Kopi Halu
│   ├── logo.png            # Logo resmi KOPI HALU
│   ├── hero-coffee.jpg     # Foto komposisi botol untuk Hero section
│   ├── about-coffee.jpg    # Foto showcase varian untuk Tentang Kami
│   ├── menu-board.jpg      # Foto asli papan Daftar Menu Kopi Halu
│   ├── product1.jpg        # Foto Kopi Halu Susu Aren
│   ├── product2.jpg        # Foto Kopi Halu Pandan
│   ├── product3.jpg        # Foto Kopi Hazelnut
│   ├── product4.jpg        # Foto Kopi Americano
│   ├── product5.jpg        # Foto Matcha Latte
│   ├── product6.jpg        # Foto Kopi Halu Extra Shot
│   └── gallery/            # Foto-foto resolusi tinggi untuk galeri lightbox
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       ├── gallery-3.jpg
│       ├── gallery-4.jpg
│       ├── gallery-5.jpg
│       ├── gallery-6.jpg
│       └── gallery-7.jpg
│
└── README.md               # Dokumentasi lengkap project
```

---

## 6. Cara Menjalankan Website Secara Lokal

Website ini bersifat **standalone (murni client-side)** sehingga sangat mudah dijalankan tanpa perlu instalasi server backend apa pun.

### Opsi A: Langsung Buka File (Paling Sederhana)
1. Buka folder project di File Explorer laptop/komputer kamu.
2. Klik ganda (double click) file `index.html`.
3. Website akan otomatis terbuka di browser favorit kamu (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, dll.).

### Opsi B: Menggunakan Ekstensi Live Server (VS Code / Antigravity)
1. Buka folder project di editor (Visual Studio Code / Antigravity).
2. Install ekstensi **Live Server** (jika belum terpasang).
3. Klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.
4. Website akan terbuka di alamat lokal: `http://127.0.0.1:5500/index.html`.

### Opsi C: Menggunakan Python Local Server (Terminal / CMD / PowerShell)
Buka terminal di direktori folder project, lalu jalankan:
```bash
python -m http.server 8000
```
Buka browser dan akses: `http://localhost:8000`.

---

## 7. Panduan Mengganti Data Placeholder

Untuk menyesuaikan data saat publikasi resmi atau presentasi UAS, Anda cukup mengubah bagian berikut:

1. **Nomor WhatsApp**:
   - Buka file `js/script.js` pada baris ke-12:
     ```javascript
     const KOPI_HALU_CONFIG = {
       whatsappNumber: "6281234567890", // Ganti dengan nomor WhatsApp aktif
       ...
     };
     ```
   - Ganti juga atribut `href="https://wa.me/6281234567890..."` di dalam file `index.html` jika diperlukan.
2. **Alamat Outlet**:
   - Di `index.html`, cari teks `Jl. Raya Kampus No. 12` pada section `#kontak` dan `<footer>`, lalu ubah sesuai alamat fisik UMKM.
3. **Akun Instagram**:
   - Di `index.html` dan `js/script.js`, cari `@kopihalu.id` lalu sesuaikan dengan username Instagram resmi UMKM.
4. **Google Maps Link**:
   - Link Google Maps bawaan sudah mengarah ke: `https://maps.app.goo.gl/3QYKChvKbavzUDgu9`.

---

## 8. Persiapan Publikasi ke GitHub Pages
*(Dikerjakan sendiri oleh mahasiswa sesuai instruksi batasan pekerjaan)*:
1. Buat repository baru di akun GitHub Anda (misal: `kopi-halu`).
2. Masukkan semua file (`index.html`, folder `css/`, `js/`, `images/`, dan `README.md`).
3. Masuk ke **Settings** > **Pages** di repository GitHub Anda.
4. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch** (Branch: `main` / root `/`).
5. Klik **Save**, dan website Anda akan aktif online dalam beberapa menit!
