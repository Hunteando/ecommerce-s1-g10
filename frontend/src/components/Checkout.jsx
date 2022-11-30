const Checkout = () => {
    return (
        <main className='d-flex justify-content-center'>
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
        </main>
    )
}

export default Checkout