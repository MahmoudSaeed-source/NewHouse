import React from 'react'
import { useParams } from 'react-router-dom'
const HouseDatailes = () => {
      const { HouseId } = useParams()
  return (
        <div>HouseDatailes {HouseId}</div>
  )
}

export default HouseDatailes