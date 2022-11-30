import ItemCount from "./ItemCount"

const ItemDetail = ({ product }) => {
  const { id, nombre, precio, categoria, descripcion, imagen, stock } = product
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
          <ItemCount initial={1} stock={stock} />
        </div>
        <hr />
        <p className="descriptionDetail">Descripción: {descripcion}</p>
        <hr />
        <p className="stockDetail">Categoría: {categoria}</p>
        <p className="stockDetail">Stock: {stock}</p>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btnDetail text-dark fw-bold">Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail