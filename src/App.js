
import { useEffect, useState } from "react"

function App()
{
    const [lat,setLat]=useState(0)
    const [long,setLong]=useState(0)
    useEffect(()=>{ navigator.geolocation.watchPosition((position)=>{ setLat(position.coords.latitude)
        setLong(position.coords.longitude)
    })},[lat,long])
    return (
        <div> <h2>Latitude {lat}</h2> <h2>Longitude {long}</h2> </div>
    )}
export default App
