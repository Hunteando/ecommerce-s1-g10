import React from 'react'

const PasswordRecovery = () => {
    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgLoginContainer'>
                    <h1 className='h1Login p-4'>RECUPERAR CONTRASEÑA</h1>
                    <form className='px-5 pb-5 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Email</label>
                            <input type="email" className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text">Por favor ingresa el e-mail con el que registraste tu cuenta.</div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-center gap-3 flexLastInputs">
                            <button type="submit" className="btn btnLogin text-dark fs-6 fw-bold">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default PasswordRecovery