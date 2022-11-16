import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h1 className='h1Cart p-4'>CARRITO DE COMPRAS</h1>
                </div>
                <div className='col-sm-12 d-flex justify-content-center align-items-center bgCartContainer'>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Precio u.</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Tarta frutal cereza</td>
                                <td>$1200</td>
                                <td>x1</td>
                                <td>$1200</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Cupcake de chocolate</td>
                                <td>$300</td>
                                <td>x2</td>
                                <td>$600</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Cookies</td>
                                <td>$100</td>
                                <td>x5</td>
                                <td>$500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='col-sm-12 d-flex justify-content-between align-items-center px-5 py-2 cartContainer'>
                    <span className='textCart'>Al finalizar tu pedido recibirás un e-mail con el detalle de tu compra</span>
                    <div className='bgCartContainer widthCartCont p-2 d-flex align-items-center justify-content-center'>
                        <span className='totalCart'>$2300</span>
                    </div>
                </div>
                <div className='col-sm-12 d-flex flex-column justify-content-between align-items-center bgCartContainer px-5'>
                    <p className='pTextCart text-center'>¿Deseas realizar el pago por los productos seleccionados?</p>
                    <div className='d-flex gap-5 justify-content-between align-items-center mb-3'>
                        <Link to='/checkout'>
                            <button type="submit" className="btn btnCart1 text-dark fw-bold">Ir a pagar</button>
                        </Link>
                        <Link to='/'>
                            <button type="submit" className="btn btnCart2 text-dark fw-bold">Seguir comprando</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Cart