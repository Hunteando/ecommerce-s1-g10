import { useCartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react'

const Checkout = () => {

    const selectEnvios = [
        {
            value: 'Seleccione una opción',
            name: 'Seleccione una opción'
        },
        {
            value: 'Si',
            name: 'Si'
        },
        {
            value: 'No',
            name: 'No'
        }
    ]

    const selectPagos = [
        {
            value: 'Seleccione una opción',
            name: 'Seleccione una opción'
        },
        {
            value: 'Efectivo',
            name: 'Efectivo'
        },
        {
            value: 'Transferencia',
            name: 'Transferencia'
        }
    ]

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
                                        {selectEnvios.map(opcion => <option key={opcion.value} value={opcion.value}>{opcion.name}</option>)}
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
                                    <label className="form-label lblCheckout">E-mail</label>
                                    <input 
                                        type="text" 
                                        className="form-control inputCheckout" 
                                        id="exampleInputPassword1"
                                        onChange={handleInputChange}
                                        name='email' />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label lblCheckout">Método de pago</label>
                                    <select className="form-select inputCheckout" aria-label="Default select example" onChange={handleInputChange} name='pago'>
                                        {selectPagos.map(opcion => <option key={opcion.value} value={opcion.value}>{opcion.name}</option>)}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <p className="pCheckout">
                                        <strong>Atención: </strong>
                                        Si seleccionas como método de pago, <strong>transferencia</strong>, envíanos un mensaje de
                                        Whatsapp.</p>
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
    )
}

export default Checkout