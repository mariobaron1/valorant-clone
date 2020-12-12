import React from 'react'
import './Maps.css'
import Map from './Map'

function Maps() {
    return (
        <div className='maps'>
            <Map
                place="Ascent"
                deskripsi="Sebuah tempat bermain terbuka untuk perang kecil memperebutkan posisi dan baku tembak membelah kedua lokasi di Ascent. Tiap lokasi bisa diperkuat dengan pintu bom yang tak bisa dibalikkan; setelah terpasang, kamu harus menghancurkannya atau mencari jalan lain. Serahkan teritori sesedikit mungkin"
            />
            <Map
                place="Bind"
                deskripsi="Dua lokasi. Tak ada jalur mid. Harus pilih kiri atau kanan. Mana yang kamu pilih? Keduanya menawarkan jalur langsung bagi penyerang dan sepasang teleporter satu arah untuk memudahkan pengepungan dari samping."
            />
            <Map
                place="Haven"
                deskripsi="Di bawah sebuah biara yang terlupakan, sebuah teriakan terdengar dari Agen rival yang bertarung memperebutkan tiga lokasi. Ada lebih banyak teritori untuk dikuasai, tetapi sisi pertahanan bisa memanfaatkan bangunan ekstra untuk mendesak secara agresif."
            />
            <Map
                place="Range"
                deskripsi="Sebuah tempat bermain terbuka untuk perang kecil memperebutkan posisi dan baku tembak membelah kedua lokasi di Ascent. Tiap lokasi bisa diperkuat dengan pintu bom yang tak bisa dibalikkan; setelah terpasang, kamu harus menghancurkannya atau mencari jalan lain. Serahkan teritori sesedikit mungkin"
            />
            <Map
                place="Split"
                deskripsi="Jika ingin berkembang pesat, kamu harus ke atas. Sepasang lokasi terbelah oleh bagian tengah lebih tinggi yang memungkinkan pergerakan cepat menggunakan dua tali untuk naik. Tiap lokasi dibangun dengan menara menjulang yang vital untuk pengendalian. Jangan lupa perhatikan sisi atas sebelum semuanya terlambat."
            />
        </div>
    )
}

export default Maps
