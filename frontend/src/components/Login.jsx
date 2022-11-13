import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return ( 
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgLoginContainer'>
                    <h1 className='h1Login p-4'>INICIO DE SESIÓN</h1>
                    <form className='px-5 pb-5 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Email</label>
                            <input type="email" className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label labelsLogin">Contraseña</label>
                            <input type="password" className="form-control inputsLogin" id="exampleInputPassword1" required />
                        </div>
                        <div className="d-flex justify-content-between align-items-center text-center gap-3 flexLastInputs">
                            <button type="submit" className="btn btnLogin text-dark fs-6 fw-bold">Iniciar sesión</button>
                            <Link to='/recuperarpassword' className='text-decoration-none'>
                                <span className='btnLostPassword fs-6 fw-bold'>Olvidaste tu contraseña?</span>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='col-sm-12 d-flex justify-content-center align-items-center bgLoginContainer'>
                    <h2 className='h2Login'>
                        No tienes cuenta? Regístrate
                        <Link to='/registro' className='text-decoration-none'>
                            <span className='spanLogin'> aquí</span>
                        </Link>
                    </h2>
                </div>
            </div>
        </main>
    )
}

export default Login