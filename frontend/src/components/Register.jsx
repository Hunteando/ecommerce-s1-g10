import { useState } from "react"

const Register = () => {
    /* Client data */
    const [clientData, setClientData] = useState({
        name: '',
        surname: '',
        email: '',
        pass: '',
        repass: '',
        phone: ''
    })

    const handleInputChange = (event) => {
        setClientData({
            ...clientData,
            [event.target.name] : event.target.value
        })
    }

    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgLoginContainer'>
                    <h1 className='h1Login p-4'>REGISTRO</h1>
                    <form className='px-5 pb-5 col-sm-12'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Nombre</label>
                            <input type="text" name="name" value={clientData.name} onChange={handleInputChange} className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Apellido</label>
                            <input type="text" name="surname" value={clientData.surname} onChange={handleInputChange} className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">E-mail</label>
                            <input type="email" name="email" value={clientData.email} onChange={handleInputChange} className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Contraseña</label>
                            <input type="password" name="pass" value={clientData.pass} onChange={handleInputChange} className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Repetir contraseña</label>
                            <input type="password" name="repass" value={clientData.repass} onChange={handleInputChange} className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label labelsLogin">Teléfono</label>
                            <input type="text" name="phone" value={clientData.phone} onChange={handleInputChange} className="form-control inputsLogin" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        {
                            clientData.name !== '' && 
                            clientData.surname !== '' && 
                            clientData.email !== '' && 
                            clientData.pass !== '' && 
                            clientData.repass !== '' && 
                            clientData.phone !== '' 
                            ?
                            <div className="d-flex justify-content-between align-items-center text-center gap-3 flexLastInputs">
                                <button type="submit" className="btn btnLogin text-dark fs-6 fw-bold">Registrarse</button>
                            </div> 
                            :
                            <div className="d-flex justify-content-between align-items-center text-center gap-3 flexLastInputs">
                                <button type="submit" className="btn btnLogin text-dark fs-6 fw-bold disabled">Registrarse</button>
                            </div>
                        }
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register