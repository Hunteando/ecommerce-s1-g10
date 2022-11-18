import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgLoginContainer'>
                    <h1 className='h1Login p-4'>CONTACTÁNOS</h1>
                    <form className='px-5 pb-5 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label textoContacto">Nombre</label>
                            <input type="text" placeholder='Ingresa aquí tu nombre' className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label  htmlFor="exampleInputPassword1" className="form-label textoContacto">Teléfono</label>
                            <input type="number" placeholder='Ingresa aquí tu teléfono' className="form-control inputsLogin" id="exampleInputPassword1" required />
                        </div>
                        <div>
                            <div className="form-group">
                                <label className='textoContacto' htmlFor="exampleFormControlTextarea1">Dejá tu comentario</label>
                                <textarea placeholder='¿Qué quieres decirnos?' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-center gap-3 flexLastInputs">
                            <div>
                                <p className='textoContacto fw-bold'>
                                    A la brevedad nos contáctaremos, gracias!
                                </p>
                            </div>
                            <div>
                                <button type="submit" className="btn btnLogin text-dark fs-6 fw-bold">Enviar</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Contact