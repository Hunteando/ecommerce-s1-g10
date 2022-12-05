import { useCartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'

const Checkout = () => {
    const { cart, totalPay } = useCartContext()

    /* Mostrar ID en Modal */
    const [ShowMeId, setShowMeId] = useState('')

    /* Imprimir Fecha */
    const fechaHoy = Date.now()
    const date = new Date(fechaHoy).toLocaleString()

    /* Llevar datos de inputs */
    const [buyerData, setBuyerData] = useState({
        envio: '',
        direccion: '',
        pago: ''
    })

    const handleInputChange = (event) => {
        setBuyerData({
            ...buyerData,
            [event.target.name] : event.target.value
        })
    }

    const order = {
        buyer: {...buyerData},
        items: cart.map(product => ({ id: product.id, nombre: product.nombre, precio: product.precio, cantidad: product.cantidad })),
        date: date,
        total: totalPay(),
    }

    const finalizarClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => setShowMeId(id))
    }


    return (
        <>
            <button type="button" className="btn btnCart1 text-dark fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">Ir a pagar</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bgModal text-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Finalizar compra</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="formCheckout d-flex justify-content-center flex-column align-items-center">
                                <div className="mb-3">
                                    <label className="form-label lblCheckout">Envío</label>
                                    <select className="form-select inputCheckout" aria-label="Default select example" name='envio' onChange={handleInputChange}>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label lblCheckout">Dirección</label>
                                    <input 
                                        type="text" 
                                        className="form-control inputCheckout" 
                                        id="exampleInputPassword1"
                                        onChange={handleInputChange}
                                        name='direccion' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label lblCheckout">Método de pago</label>
                                    <select className="form-select inputCheckout" aria-label="Default select example" onChange={handleInputChange} name='pago'>
                                        <option value="1">Efectivo</option>
                                        <option value="2">Transferencia</option>
                                        <option value="3">Mercado Pago</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <p className="pCheckout">
                                        <strong>Atención: </strong>
                                        Si seleccionas como método de pago, <strong>transferencia</strong>, vas a recibir un
                                        mensaje con los detalles. Si seleccionas <strong>MercadoPago</strong> serás redirigido para
                                        realizar tu pago.</p>
                                    <p className="pCheckout">Una vez finalizado el pago espera a que nos contactemos para informarte
                                        como y cuando está listo tu pedido.</p>
                                </div>
                                <div className='d-flex gap-5 justify-content-end align-items-center col-12'>
                                    <button onClick={finalizarClick} className="btn btnCheckout text-dark fw-bold">Finalizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

        /*  <main className='d-flex justify-content-center'>
             <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                 <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                     <h1 className='h1Cart p-4'>FINALIZAR COMPRA</h1>
                 </div>
                 <div className='col-sm-12 p-3 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                     <h3 className="h3Checkout fw-bold">Por favor completa el siguiente formulario para finalizar la compra:</h3>
                     <form className="formCheckout d-flex justify-content-center flex-column align-items-center">
                         <div className="mb-3">
                             <label className="form-label lblCheckout">Envío</label>
                             <select className="form-select inputCheckout" aria-label="Default select example">
                                 <option value="1">Si</option>
                                 <option value="2">No</option>
                             </select>
                         </div>
                         <div className="mb-3">
                             <label className="form-label lblCheckout">Dirección</label>
                             <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
                         </div>
                         <div className="mb-3">
                             <label className="form-label lblCheckout">Método de pago</label>
                             <select className="form-select inputCheckout" aria-label="Default select example">
                                 <option value="1">Efectivo</option>
                                 <option value="2">Transferencia</option>
                                 <option value="3">Mercado Pago</option>
                             </select>
                         </div>
                         <div className="mb-3">
                             <p className="pCheckout">
                                 <strong>Atención: </strong> 
                                 Si seleccionas como método de pago, <strong>transferencia</strong>, vas a recibir un
                                 mensaje con los detalles. Si seleccionas <strong>MercadoPago</strong> serás redirigido para
                                 realizar tu pago.</p>
                             <p className="pCheckout">Una vez finalizado el pago espera a que nos contactemos para informarte
                                 como y cuando está listo tu pedido.</p>
                         </div>
                         <div className='d-flex gap-5 justify-content-end align-items-center col-12'>
                             <button type="submit" className="btn btnCheckout text-dark fw-bold">Finalizar</button>
                         </div>
                     </form>
                 </div>
             </div>
         </main> */
    )
}

export default Checkout