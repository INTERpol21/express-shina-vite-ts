import styles from './index.module.scss'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { Navigate, SidebarProps } from '../../types'

const ComponentSidebar = ({ setCoordinate, setZoom, places }: SidebarProps) => {
  const handleClick = (place: Navigate) => {
    setCoordinate([place.latitude, place.longitude])
    setZoom(16)
  }

  return (
    <div className={styles.sidebar}>
      <Scrollbars style={{ height: '95vh' }}>
        {places.map((place) => {
          return (
            <div
              className={styles.sidebar__items}
              key={place.latitude}
              tabIndex={0}
              onClick={() => handleClick(place)}>
              <div className={styles.sidebar__content_address}>{place.address}</div>
              <div className={styles.sidebar__content_buttons}>
                {place.budgets.map((budget) => {
                  return (
                    <div className={styles.sidebar__content_button} key={budget}>
                      {budget}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </Scrollbars>
    </div>
  )
}

export default ComponentSidebar
