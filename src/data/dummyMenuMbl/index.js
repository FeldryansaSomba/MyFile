import React from "react";
import { IconEdit, IconGantiPass, IconInfo, IconKeluar } from "../../assets";

export const dummyMenuMbl = [
    {
        id: 1,
        nama: 'Edit Profil',
        gambar: <IconEdit/>,
        halaman: 'EditProfilMbl'
    },
    {
        id: 2,
        nama: 'Ganti Kata Sandi',
        gambar: <IconGantiPass/>,
        halaman: 'GantiPassMbl'
    },
    {
        id: 3,
        nama: 'Informasi Aplikasi',
        gambar: <IconInfo/>,
        halaman: 'InfoApp'
    },
    {
        id: 4,
        nama: 'Keluar',
        gambar: <IconKeluar/>,
        halaman: 'MasukMebel'
    },
]