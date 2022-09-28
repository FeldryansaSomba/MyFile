import React from "react";
import { IconEdit, IconGantiPass, IconInfo, IconKeluar } from "../../assets";

export const dummyMenu = [
    {
        id: 1,
        nama: 'Edit Profil',
        gambar: <IconEdit/>,
        halaman: 'EditProfileCS'
    },
    {
        id: 2,
        nama: 'Ganti Kata Sandi',
        gambar: <IconGantiPass/>,
        halaman: 'GantiPassCS'
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
        halaman: 'MasukCS'
    },
]