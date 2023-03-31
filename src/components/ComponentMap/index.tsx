import styles from './index.module.scss'
import { Map, Placemark, YMaps, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps'
import { MapProps } from '../../types'

const ComponentMap = ({ coordinate, zoom }: MapProps) => {
  return (
    <YMaps>
      <Map
        className={styles.mapYandex}
        state={{
          center: coordinate || [54.708415, 55.975993],
          zoom: zoom,
        }}
        options={{
          suppressMapOpenBlock: true,
        }}>
        <ZoomControl />
        <FullscreenControl />
        <Placemark geometry={coordinate || []} />
      </Map>
    </YMaps>
  )
}
export default ComponentMap
