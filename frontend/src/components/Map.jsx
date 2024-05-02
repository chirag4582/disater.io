import React from 'react'
import { ComposableMap, Geographies, Geography, Graticule,Sphere } from "react-simple-maps"
import worldGeo from './geojson-file.json'
import '../App.css'
// const geoUrl =
// "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"
function Map() {

    const handleChange = (e)=>{
        console.log(e)
    }

    return (
        <ComposableMap className='map'>
            <Graticule stroke="#F53" />
            <Sphere stroke="#FF5533" strokeWidth={2} />
            <Geographies onClick={(e)=>{handleChange(e)}} geography={worldGeo}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            style={{
                                default: { fill: "rgb(37, 36, 54)" },
                                hover: { fill: "gray" },
                                pressed: { fill: "white" },
                            }}
                            geography={geo} />
                    ))
                }
            </Geographies>
        </ComposableMap>
    )
}

export default Map