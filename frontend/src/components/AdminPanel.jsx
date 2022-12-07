import { useState, useEffect } from "react"
import { collection, deleteDoc, getDocs, getFirestore, doc, addDoc, getDoc } from 'firebase/firestore'
import AdminPanelProducts from "./AdminPanelProducts"

const AdminPanel = () => {
    const [data, setData] = useState([])

    //useStateFormAgregar
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [stock, setStock] = useState('')
    const [imagen, setImagen] = useState('')

    const handleDelete = async (id) => {
        const db = getFirestore()
        const productDoc = doc(db, 'items', id)
        await deleteDoc(productDoc)
        location.reload()
    }

    const store = async (e) => {
        e.preventDefault()
        const db = getFirestore()
        const queryItems = collection(db, 'items')
        await addDoc(queryItems, {
            nombre: nombre,
            precio: precio,
            categoria: categoria,
            descripcion: descripcion,
            stock: stock,
            imagen: imagen
        })
        location.reload()
    }

    const getProductsById = async (id) => {
        const db = getFirestore()
        const product = await getDoc( doc(db, 'items', id) )
        setNombre(product.data().nombre)
        setPrecio(product.data().precio)
        setCategoria(product.data().categoria)
        setDescripcion(product.data().descripcion)
        setStock(product.data().stock)
    }

    useEffect(() => {
        const db = getFirestore()
        const queryItems = collection(db, 'items')
        getDocs(queryItems)
            .then(res => setData(res.docs.map(item => ({ id: item.id, ...item.data() }))))
    }, [])

    return (
        <main className='d-flex justify-content-center'>
            <div className='row my-5 px-5 d-flex flex-column gap-4 justify-content-center align-items-center container'>
                <div className='col-sm-12 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h1 className='h1Cart p-4'>PANEL DE ADMINISTRADOR</h1>
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
                <div className='col-sm-12 p-3 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h3 className="h3UserPanel fw-bold">AGREGAR PRODUCTOS</h3>
                    <form className="d-flex justify-content-center flex-column align-items-center" onSubmit={store}>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label lblCheckout">Imagen del producto</label>
                            <input 
                                className="form-control inputCheckout" 
                                type="file" 
                                id="formFile"
                                value={imagen}
                                onChange={ (e) =>  setImagen(e.target.value) }/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Nombre del producto</label>
                            <input 
                                type="text" 
                                className="form-control inputCheckout" 
                                id="exampleInputPassword1" 
                                value={nombre}
                                onChange={ (e) =>  setNombre(e.target.value) }/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Precio del producto</label>
                            <input 
                                type="text" 
                                className="form-control inputCheckout" 
                                id="exampleInputPassword1" 
                                value={precio}
                                onChange={ (e) =>  setPrecio(e.target.value) } />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Categoría del producto</label>
                            <input 
                                type="text" 
                                className="form-control inputCheckout" 
                                id="exampleInputPassword1"
                                value={categoria}
                                onChange={ (e) =>  setCategoria(e.target.value) } />
                        </div>
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Stock</label>
                            <input 
                                type="text" 
                                className="form-control inputCheckout" 
                                id="exampleInputPassword1"
                                value={stock}
                                onChange={ (e) =>  setStock(e.target.value) } />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="form-label" className="form-label lblCheckout">Descripción del producto</label>
                            <textarea 
                                className="form-control inputCheckoutTextArea" 
                                id="exampleFormControlTextarea1"
                                value={descripcion}
                                onChange={ (e) =>  setDescripcion(e.target.value) }>
                                </textarea>
                        </div>
                        <div className='d-flex gap-5 justify-content-end align-items-center divBtnUser'>
                            <button 
                                type="submit" 
                                className="btn btnCheckout text-dark fw-bold">
                                    Agregar
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-sm-12 p-3 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <h3 className="h3UserPanel fw-bold">BUSCAR PRODUCTO</h3>
                    <form className="d-flex justify-content-center flex-column align-items-center">
                        <div className="mb-3">
                            <label className="form-label lblCheckout">Ingrese el nombre del producto a buscar</label>
                            <input type="text" className="form-control inputCheckout" id="exampleInputPassword1" />
                        </div>
                        <div className='d-flex gap-5 justify-content-end align-items-center divBtnUser'>
                            <button type="submit" className="btn btnCheckout text-dark fw-bold">Buscar</button>
                        </div>
                    </form>
                </div>
                <div className='col-sm-12 p-3 d-flex justify-content-center flex-column align-items-center bgCartContainer'>
                    <table className="table table-striped text-center">
                        <thead className="table-danger">
                            <tr>
                                <th scope="col">Producto</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((product) => {
                                return (
                                    <AdminPanelProducts 
                                    key={product.id} 
                                    id={product.id} 
                                    nombre={product.nombre} 
                                    handleDelete={handleDelete}
                                    getProductsById={getProductsById}  />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default AdminPanel