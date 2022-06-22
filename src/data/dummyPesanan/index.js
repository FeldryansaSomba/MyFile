import {
    Meja,
    Kursi,
    Rak,
} from '../../assets'

export const dummyPesanan = [
    {
        id: 1,
        tanggalPemesanan: 'Jumat, 20 Juni 2022',
        nama: 'Meja Kayu Jati',
        gambar: [Meja, Kursi],
        harga: 350000,
        namaMebel: 'Mebel Jaya',
        lokasi: 'Tondano',
        alamat: 'Jl. Wawalintouan, Rerewokan, Tondano Utara',
        desc: 'Meja kayu jati dengan bahan berkualitas',
        panjang: '2 m',
        lebar: '1.5 m',
        tinggi: '1.75 m',
        warna: 'Cokelat',
        kayu: 'Jati',
        ready: true,
    },
    {
        id: 2,
        tanggalPemesanan: 'Sabtu, 21 Juni 2022',
        gambar: [Rak],
        nama: 'Rak Buku',
        harga: 150000,
        namaMebel: 'Mebel Josh',
        lokasi: 'Tomohon',
        alamat: 'Jl. Sejahtera No.2822, Kolongan, Kec. Tomohon',
        desc: 'Rak Buku dengan bahan berkualitas',
        panjang: '1.5 m',
        lebar: '1 m',
        tinggi: '2.5 m',
        warna: 'Hitam',
        kayu: 'Jati',
        ready: true
    },
]