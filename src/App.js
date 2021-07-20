import React from 'react'
import Marks from './components/Marks'
import { useWorldAtlas } from './hooks/useWorldAtlas'
import { useCities } from './hooks/useCities'
import { max, scaleSqrt } from 'd3'
// import { message } from './utils/message'
// useCallback - good for adding event listeners only once
// - arg0 - function you want to control
// - arg1 - [array, of, dependencies] - things it needs to run

const width = 960
const height = 500

const App = () => {
  const worldAtlas = useWorldAtlas()
  const cities = useCities()
  // console.log(cities)

  if (!worldAtlas || !cities) {
    return <pre>'Loading...'</pre>
  }

  const sizeValue = (d) => d.population
  const maxRadius = 15

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius])

  return (
    <svg width={width} height={height}>
      <Marks //
        worldAtlas={worldAtlas}
        cities={cities}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  )
}

export default App
