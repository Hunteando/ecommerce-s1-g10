import React from 'react'

const UserPanel = () => {
    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h1 className='h1Cart p-4'>PANEL DE USUARIO</h1>
                </div>
                <div className='col-sm-12 p-3 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h3 className="h3UserPanel fw-bold">DATOS DE USUARIO</h3>
                    <div className='divUserPanel'>
                        <span className='mb-1 mt-3 d-flex flex-column'>
                            <strong>Nombre: </strong> Juan
                        </span>
                        <span>
                            <strong className='d-flex flex-column'>Apellido: </strong> Fernandez
                        </span>
                    </div>
                    <div className='divUserPanel'>
                    <span className='d-flex flex-column'>
                            <strong>E-mail: </strong> juanfernandez@gmail.com
                        </span>
                        <span className='d-flex flex-column'>
                            <strong>Teléfono: </strong> 3476634962
                        </span>
                    </div>
                </div>
                <div className='col-sm-12 p-3 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h3 className="h3UserPanel fw-bold">MODIFICAR CONTRASEÑA</h3>
                    <form className="d-flex justify-content-center flex-column align-items-center">
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Contraseña anterior</label>
                            <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Contraseña nueva</label>
                            <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Repita contraseña nueva</label>
                            <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
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

export default UserPanel