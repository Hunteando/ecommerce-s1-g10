const Register = () => {

    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgLoginContainer'>
                    <h1 className='h1Login p-4'>REGISTRO</h1>
                    <form className='px-5 pb-5 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Nombre</label>
                            <input type="text" name="name" className="form-control inputsLogin" id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Apellido</label>
                            <input type="text" name="surname" className="form-control inputsLogin" id="surname" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">E-mail</label>
                            <input type="email" name="email" className="form-control inputsLogin" id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Contraseña</label>
                            <input type="password" name="pass" className="form-control inputsLogin" id="pass" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Repetir contraseña</label>
                            <input type="password" name="repass" className="form-control inputsLogin" id="repass" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Teléfono</label>
                            <input type="text" name="phone" className="form-control inputsLogin" id="phone" aria-describedby="emailHelp" />
                        </div>
                            <div className="d-flex justify-content-between align-items-center text-center gap-3 flexLastInputs">
                                <button type="submit" className="btn btnLogin text-dark fs-6 fw-bold">Registrarse</button>
                            </div> 
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register