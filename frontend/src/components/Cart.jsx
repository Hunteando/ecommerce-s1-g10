import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import Checkout from './Checkout'

const Cart = () => {
    const { cart, totalPay } = useCartContext()

    if (cart.length === 0) {
        return (
            <>
                <div className='bgCart d-flex justify-content-center align-items-center flex-column'>
                    <h2>No hay ningun producto agregado el carrito</h2>
                    <Link to='../'>
                        <button className='btn bgButton'>Ir a comprar</button>
                    </Link>
                </div>
            </>
        )
    }

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
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(productos => <ItemCart key={productos.id} productos={productos} />)}
                        </tbody>
                    </table>
                </div>
                <div className='col-sm-12 d-flex justify-content-between align-items-center px-5 py-2 cartContainer'>
                    <span className='textCart'>Al finalizar tu pedido recibirás un e-mail con el detalle de tu compra</span>
                    <div className='bgCartContainer widthCartCont p-2 d-flex align-items-center justify-content-center'>
                        <span className='totalCart'>Total: ${totalPay()}</span>
                    </div>
                </div>
                <div className='col-sm-12 d-flex flex-column justify-content-between align-items-center bgCartContainer px-5'>
                    <p className='pTextCart text-center'>¿Deseas realizar el pago por los productos seleccionados?</p>
                    <div className='d-flex gap-5 justify-content-between align-items-center mb-3'>
                        <Checkout />
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