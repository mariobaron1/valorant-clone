import React from 'react'
import Weapon from './Weapon'
import './Weapons.css'
import Parallax from 'react-rellax'

function Weapons() {

    return (
        <div className="Weapons">
            <h1>Weapons</h1>
            <div className="Container">
                <Parallax speed={3}>
                    <Weapon
                        source="Classic"
                        title="Classic"
                        type="Side Arm"
                        deskripsi="Ringan dan serba guna, senjata standar untuk semua agen ini menjadi pilihan klasik"
                    />
                </Parallax>

                <Parallax speed={2}>
                    <Weapon
                        source="Shorty"
                        title="Shorty"
                        type="Side Arm"
                        deskripsi="Kejutkan lawanmu dalam jarak dekat untuk efektivitas maks"
                    />
                </Parallax>

                <Parallax speed={1}>
                    <Weapon
                        source="Frenzy"
                        title="Frenzy"
                        type="Side Arm"
                        deskripsi="Jarak dekat, tahan pelatuk. Jarak jauh..coba yang lain"
                    />
                </Parallax>

                <Parallax speed={3}>
                    <Weapon
                        source="Ghost"
                        title="Ghost"
                        type="Side Arm"
                        deskripsi="Ramping, memiliki peredam, dan unggul dalam jarak berapa pun"
                    />
                </Parallax>

                <Parallax speed={2}>
                    <Weapon
                        source="Sheriff"
                        title="Sheriff"
                        type="Side Arm"
                        deskripsi="Pistol enam peluru modern untuk yang mengincar tembak kepala"
                    />
                </Parallax>

                <Parallax speed={1}>
                    <Weapon
                        source="Stinger"
                        title="Stinger"
                        type="SMGS"
                        deskripsi="Mereka akan tahu mereka akan tamat saat ham hamburan peluruStinger mengenai mereka"
                    />
                </Parallax>

                <Parallax speed={3}>
                    <Weapon
                        source="Spectre"
                        title="Spectre"
                        type="SMGS"
                        deskripsi="Saat ragu, Spectre pilihanmu"
                    />
                </Parallax>

                <Parallax speed={2}>
                    <Weapon
                        source="Bucky"
                        title="Bucky"
                        type="SHOTGUNS"
                        deskripsi="Penyerang. Pertahanan. Kamulah pembawa senapan gentel aksi pompoa"
                    />
                </Parallax>

                <Parallax speed={1}>
                    <Weapon
                        source="Judge"
                        title="Judge"
                        type="SHOTGUNS"
                        deskripsi="Senapan gentel otomatis dengan tembakan cepat yang memberikan kerusakan tinggi berkesinambungan"
                    />
                </Parallax>

                <Parallax speed={3}>
                    <Weapon
                        source="Bulldog"
                        title="Bulldog"
                        type="RIFLES"
                        deskripsi="Salah satu bentuk kebahagiaan adalah menumbangkan lawan dengan Bulldog"
                    />
                </Parallax>

                <Parallax speed={2}>
                    <Weapon
                        source="Guardian"
                        title="Guardian"
                        type="RIFLES"
                        deskripsi="Unggul di tangan penembakan yang sabar"
                    />
                </Parallax>

                <Parallax speed={1}>
                    <Weapon
                        source="Phantom"
                        title="Phantom"
                        type="RIFLES"
                        deskripsi="Senjata seimbang yang dirancang untuk tembakan stabil, terus menerus"
                    />
                </Parallax>

                <Parallax speed={3}>
                    <Weapon
                        source="Vandal"
                        title="Vandal"
                        type="RIFLES"
                        deskripsi="Senajata favorit yang akurat ini unggul dalam rentetan pendek"
                    />
                </Parallax>

                <Parallax speed={2}>
                    <Weapon
                        source="Marshal"
                        title="Marshal"
                        type="SNIPER"
                        deskripsi="Bidik, bernapas, dan mereka akan menyesal berada di sana"
                    />
                </Parallax>

                <Parallax speed={1}>
                    <Weapon
                        source="Operator"
                        title="Operator"
                        type="SNIPER"
                        deskripsi="Cari tempat yang nyaman dan kamu bisa mengendalikan medan penting"
                    />
                </Parallax>

                <Parallax speed={3}>
                    <Weapon
                        source="Ares"
                        title="Ares"
                        type="HEAVY"
                        deskripsi="Jangan remehkan ukuran bongsornya"
                    />
                </Parallax>

                <Parallax speed={2}>
                    <Weapon
                        source="Odin"
                        title="Odin"
                        type="HEAVY"
                        deskripsi="Memakai palu mesin akan membawa kejayaan bagi pemegangnya dan kehancuran bagi lawannya"
                    />
                </Parallax>

                <Parallax speed={1}>
                    <Weapon
                        source="TacticalKnife"
                        title="Tactical Knife"
                        type="Side Arm"
                        deskripsi="Sebuah solusi intim"
                    />
                </Parallax>
            </div>
        </div>
    )
}

export default Weapons
