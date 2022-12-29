import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../redux/actions/products';

const ItemDetailContainer = () => {
  // const [data, setData] = useState([])
  const { itemId } = useParams()

  // dispatch = para disparar las actions
  // useSelector = para traer la informacion que esta en el redux
  const dispatch = useDispatch()
  const { productDetail: data } = useSelector(state => state.products)

  useEffect(() => {

    dispatch(getProductById(itemId))
    // const db = getFirestore()

    // const queryDoc = doc(db, 'items', itemId)
    // getDoc(queryDoc)
    //     .then(res => setData({id: res.id, ...res.data()}))
  }, [dispatch])

  return (
    <div>
      <ItemDetail data={data} />
    </div>
  )
}

export default ItemDetailContainer