import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <div className="d-flex pt-2">
        <Link to='/cart'>
            <FontAwesomeIcon className="colorCart" icon={faShoppingCart} />
        </Link>
        <span className='valueCart'>10</span>
    </div>
  )
}

export default CartWidget