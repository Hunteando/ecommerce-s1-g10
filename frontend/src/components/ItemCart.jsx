import { useCartContext } from '../context/CartContext'
import { BsFillTrashFill } from "react-icons/bs"

const ItemCart = ({ productos }) => {
    const { removeItem } = useCartContext()
  return (
    <tr className='trDownTable'>
        <td><img src={productos.imagen} alt='{product.title}' className='imgTable' /></td>
        <td>{productos.nombre}</td>
        <td>${productos.precio}</td>
        <td>x{productos.cantidad}</td>
        <td>${productos.cantidad * productos.precio}</td>
        <td>
            <button className='btnDeleteCart' onClick={() => removeItem(productos.id)}>
                <BsFillTrashFill />
            </button>
        </td>
    </tr>
  )
}

export default ItemCart