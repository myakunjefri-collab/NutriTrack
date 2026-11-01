# Spesifikasi Halaman Masuk & Daftar

Rute: `/login` dan `/register`, dirender oleh SATU shell persisten di `app/(auth)/layout.tsx` -> `components/auth/AuthShell.tsx`.
Karena layout tidak unmount saat berpindah rute, panel berwarna dapat meluncur antar sisi (URL tetap berganti, tombol Back berfungsi).

## Bahasa visual (mengikuti landing page yang sudah dibangun)
- Latar #F7F8F8 + grid titik + cahaya cyan/kuning blur. Kartu putih rounded-[36px].
- Panel showcase: ungu #7866FF (Masuk) <-> kuning #FFCA38 (Daftar), rounded-[28px], warna ikut bermorfosis saat meluncur.
- Isi panel: ClayCard 3D (gaya hero), IsometricCube, chip putih/hitam, parallax mengikuti kursor.
- Heading hitam uppercase `font-black tracking-tightest`, label mono kecil, tombol utama pill #18140B dengan panah cyan + shimmer.
- Input: label mengambang, fokus cyan (#38E8F5) ring-4, error coral.

## Urutan transisi Masuk <-> Daftar (sekitar 1,2 dtk)
1. 0 dtk: form lama memudar + geser 24px (0,28 dtk).
2. 0 dtk: panel meluncur ke sisi lain (0,95 dtk, easing [0.76,0,0.24,1]) sambil warnanya berubah.
3. 0,35 dtk: isi panel lama keluar, isi baru masuk.
4. 0,55 dtk: form baru muncul berurutan (stagger 60 ms).
5. Toggle Masuk|Daftar di atas kartu: indikator hitam meluncur (spring, layoutId).
Mobile (<1024px): panel diganti banner berwarna di atas kartu (warna ikut berubah), form crossfade.
`prefers-reduced-motion`: semua durasi 0, parallax dan shimmer mati.

## Perilaku (prototipe, belum ada backend)
- Masuk: pilih peran (Kader, Orang Tua, Dapur, Puskesmas, Dinkes), identitas + kata sandi, validasi kosong, status idle -> loading -> done, tombol "Isi akun demo".
- Daftar 2 langkah: (1) nama, peran, kontak, kata sandi + meter kekuatan; (2) kabupaten/kota Jatim, unit kerja, persetujuan UU PDP (PRD SUP-06). Peran Dinkes hanya lewat undangan.
- Saat submit tampil catatan "mode prototipe, tidak ada sesi/data tersimpan".

## Integrasi backend nanti (Supabase Auth)
Ganti timer di `LoginForm.onSubmit` dan `RegisterForm.submit` dengan `supabase.auth.signInWithPassword` / `signUp`; setelah masuk, arahkan ke dashboard sesuai peran.
