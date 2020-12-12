import React from 'react'
import './Map.css'

function Map({ place, deskripsi }) {
    return (
        <div className='map'>
            <h1>{place}</h1>
            <div class="container">
                <div class="map_bg">
                    <img src={`img/maps/Loading_Screen_${place}.png`} alt="bg-map" />
                </div>
                <div class="deskripsi">
                    <p>{deskripsi}</p>
                </div>
            </div>

        </div>
    )
}

export default Map
