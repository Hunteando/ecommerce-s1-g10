import React from 'react'

const EditProducts = () => {
    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h1 className='h1Cart p-4'>EDICIÓN DE PRODUCTOS</h1>
                </div>
                <div className='col-sm-12 p-3 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h3 className="h3UserPanel fw-bold">MODIFICAR PRODUCTO</h3>
                    <form className="d-flex justify-content-center flex-column align-items-center">
                        <div className="mb-3">
                            <label for="formFile" className="form-label lblCheckout">Imagen del producto</label>
                            <input className="form-control inputCheckout" type="file" id="formFile" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Nombre del producto</label>
                            <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Precio del producto</label>
                            <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Categoría del producto</label>
                            <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="form-label lblCheckout" className="form-label">Descripción del producto</label>
                            <textarea className="form-control inputCheckoutTextArea" id="exampleFormControlTextarea1"></textarea>
                        </div>
                        <div className='d-flex gap-5 justify-content-end align-items-center divBtnUser'>
                            <button type="submit" className="btn btnCheckout text-dark fw-bold">Modificar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default EditProducts