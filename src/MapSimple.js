import React, { useEffect, useRef, useState } from 'react'
import L from 'leaflet'

function MapSimple() {

  const mapRef = useRef(null)
      useEffect(() => {

        mapRef.current = L.map('map', {
            center: [42.69751, 23.32415],
            zoom: 16,
            layers: [
                L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                })
            ]
        })
    }, [])
    
    return <div id='map' style={{ width: '80%' }}></div>
}

export default MapSimple