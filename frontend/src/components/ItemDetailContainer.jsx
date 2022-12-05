import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [data, setData] = useState([])
    const { itemId } = useParams()

    useEffect(() => {
      const db = getFirestore()
      
      const queryDoc = doc(db, 'items', itemId)
      getDoc(queryDoc)
          .then(res => setData({id: res.id, ...res.data()}))
  }, [itemId])

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer