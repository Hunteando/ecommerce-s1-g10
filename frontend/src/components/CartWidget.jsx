import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useCartContext } from '../context/CartContext'

const CartWidget = () => {
  const { totalItems } = useCartContext()
  return (
    <div className="d-flex pt-2">
        <Link to='/cart'>
            <FontAwesomeIcon className="colorCart" icon={faShoppingCart} />
        </Link>
        <span className='valueCart'>{totalItems() || ''}</span>
    </div>
  )
}

export default CartWidget