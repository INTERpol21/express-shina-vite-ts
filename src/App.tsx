import { useState } from 'react'
import styles from './App.module.scss'
import ComponentMap from './components/ComponentMap'

import data from './store/state.json'
import { Coordinates, Navigate } from './types'
import ComponentSidebar from './components/ComponentSidebar/index'

const App = () => {
  const places: Navigate[] = data.pickPoints
  const [coordinate, setCoordinate] = useState<Coordinates>()
  const [zoom, setZoom] = useState(5)

  return (
    <div className={styles.app}>
      <ComponentSidebar setCoordinate={setCoordinate} setZoom={setZoom} places={places} />
      <ComponentMap coordinate={coordinate} zoom={zoom} />
    </div>
  )
}

export default App
