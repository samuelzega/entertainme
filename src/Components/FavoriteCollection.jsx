import React from 'react'
import { Row } from 'antd'
import CardItem from './CardItem'
import { useSelector } from 'react-redux'

export default function({ setDetailData }) {
  const allFavorites = useSelector(state => state.favorite.favoriteImage)
  return (
    <div>
      <Row>
        {allFavorites.map(imageData => {
          return (
            <CardItem
              key={imageData.id}
              data={imageData}
              setDetailData={setDetailData}
            />
          )
        })}
      </Row>
    </div>
  )
}
