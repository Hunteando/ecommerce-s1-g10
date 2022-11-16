import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import productos from "../mocks/fakeapi"

const ItemDetailContainer = () => {
    const [data, setData] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
      const getData = new Promise(resolve => {
          resolve(productos)
      })
      getData.then(res => setData(res))
  }, [itemId])

  return (
    <div>
      {
        data.map(product => {
          return (
            itemId == product.id ?
            <ItemDetail key={product.id} product={product} /> :
            null
          )
        })
      }
    </div>
  )
}

export default ItemDetailContainer