import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

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
        <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer