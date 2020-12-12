import React from 'react'
import Weapon from './Weapon'
import './Weapons.css'

function Weapons() {

    return (
        <div className="Weapons">
            <h1>Weapons</h1>
            <div className="Container">
                <Weapon
                    source="Classic"
                    title="Classic"
                    type="Side Arm"
                    deskripsi="Ringan dan serba guna, senjata standar untuk semua agen ini menjadi pilihan klasik"
                />
                <Weapon
                    source="Shorty"
                    title="Shorty"
                    type="Side Arm"
                    deskripsi="Kejutkan lawanmu dalam jarak dekat untuk efektivitas maks"
                />
                <Weapon
                    source="Frenzy"
                    title="Frenzy"
                    type="Side Arm"
                    deskripsi="Jarak dekat, tahan pelatuk. Jarak jauh..coba yang lain"
                />
                <Weapon
                    source="Ghost"
                    title="Ghost"
                    type="Side Arm"
                    deskripsi="Ramping, memiliki peredam, dan unggul dalam jarak berapa pun"
                />
                <Weapon
                    source="Sheriff"
                    title="Sheriff"
                    type="Side Arm"
                    deskripsi="Pistol enam peluru modern untuk yang mengincar tembak kepala"
                />
                <Weapon
                    source="Stinger"
                    title="Stinger"
                    type="SMGS"
                    deskripsi="Mereka akan tahu mereka akan tamat saat ham hamburan peluruStinger mengenai mereka"
                />
                <Weapon
                    source="Spectre"
                    title="Spectre"
                    type="SMGS"
                    deskripsi="Saat ragu, Spectre pilihanmu"
                />
                <Weapon
                    source="Bucky"
                    title="Bucky"
                    type="SHOTGUNS"
                    deskripsi="Penyerang. Pertahanan. Kamulah pembawa senapan gentel aksi pompoa"
                />
                <Weapon
                    source="Judge"
                    title="Judge"
                    type="SHOTGUNS"
                    deskripsi="Senapan gentel otomatis dengan tembakan cepat yang memberikan kerusakan tinggi berkesinambungan"
                />
                <Weapon
                    source="Bulldog"
                    title="Bulldog"
                    type="RIFLES"
                    deskripsi="Salah satu bentuk kebahagiaan adalah menumbangkan lawan dengan Bulldog"
                />
                <Weapon
                    source="Guardian"
                    title="Guardian"
                    type="RIFLES"
                    deskripsi="Unggul di tangan penembakan yang sabar"
                />
                <Weapon
                    source="Phantom"
                    title="Phantom"
                    type="RIFLES"
                    deskripsi="Senjata seimbang yang dirancang untuk tembakan stabil, terus menerus"
                />
                <Weapon
                    source="Vandal"
                    title="Vandal"
                    type="RIFLES"
                    deskripsi="Senajata favorit yang akurat ini unggul dalam rentetan pendek"
                />
                <Weapon
                    source="Marshal"
                    title="Marshal"
                    type="SNIPER"
                    deskripsi="Bidik, bernapas, dan mereka akan menyesal berada di sana"
                />
                <Weapon
                    source="Operator"
                    title="Operator"
                    type="SNIPER"
                    deskripsi="Cari tempat yang nyaman dan kamu bisa mengendalikan medan penting"
                />
                <Weapon
                    source="Ares"
                    title="Ares"
                    type="HEAVY"
                    deskripsi="Jangan remehkan ukuran bongsornya"
                />
                <Weapon
                    source="Odin"
                    title="Odin"
                    type="HEAVY"
                    deskripsi="Memakai palu mesin akan membawa kejayaan bagi pemegangnya dan kehancuran bagi lawannya"
                />
                <Weapon
                    source="TacticalKnife"
                    title="Tactical Knife"
                    type="Side Arm"
                    deskripsi="Sebuah solusi intim"
                />


            </div>
        </div>
    )
}

export default Weapons
