import { useState } from 'react'

import Map from './components/Map'

function App() {
  const [count, setCount] = useState(0)
  const position = [51.505, -0.09]
  return (
    <>
      <Map/>
    </>
  )
}

export default App
