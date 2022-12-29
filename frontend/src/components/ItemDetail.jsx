import ItemCount from "./ItemCount"
import { useCartContext } from '../context/CartContext'
import { FaEdit } from "react-icons/fa";

const ItemDetail = ({ data }) => {
  const { addItem } = useCartContext()

  const onAdd = (cantidad) => {
    addItem(data, cantidad)
  }

  const { _id: id, name: nombre, price: precio, category: categoria, description: descripcion, image:  imagen, stock = 'N/A' } = data
  return (
    <div key={id} className='container my-4 divDetail'>
      <div className='col-sm-12 col-md-6 col-lg-7'>
        <img className="imgDetail" src={imagen} alt='product-img' />
      </div>
      <div className='col-sm-12 col-md-6 col-lg-2 bgSecondColumnDetail'>
        <h3>{nombre}</h3>
        <hr />
        <div className="priceQuantity d-flex justify-content-center align-items-center gap-5">
          <h4>Precio:
            <span> {precio}</span>
          </h4>
        </div>
        <hr />
        <p className="descriptionDetail">Descripción: {descripcion}</p>
        <hr />
        <p className="stockDetail">Categoría: {categoria.name}</p>
        <p className="stockDetail">Stock: {stock}</p>
        <hr />
        <ItemCount initial={1} stock={stock} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail