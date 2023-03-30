export interface Navigate {
  address: string
  budgets: string[]
  latitude: number
  longitude: number
}
export type Coordinates = [Navigate['latitude'], Navigate['longitude']] | undefined

export type SidebarProps = {
  places: Navigate[]
  setCoordinate: React.Dispatch<React.SetStateAction<Coordinates>>
  setZoom: React.Dispatch<React.SetStateAction<number>>
}

export type MapProps = {
  coordinate?: [Navigate['latitude'], Navigate['longitude']]
  zoom: number
}
