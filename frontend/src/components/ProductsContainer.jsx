import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { Link, useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ProductsContainer = () => {
    const [data, setData] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()

        const queryItems = collection(db, 'items')
        if(categoryId){
            const queryFilter = query(queryItems, where('categoria', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(item => ({id: item.id, ...item.data()}))))
        } else {
            getDocs(queryItems)
                .then(res => setData(res.docs.map(item => ({id: item.id, ...item.data()}))))
        }
    }, [categoryId])
    return (
        <div className="container mt-4 divMainProducts">
            <div className="divProducts1 col-sm-6 col-md-5 col-lg-4">
                <p className='pProducts'>Filtrar por:</p>
                <div className='divFilter'>
                    <div className="form-check">
                        <Link to='/categorias/tartas' key='tartas'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </Link>
                        <label className="form-check-label labelProducts" htmlFor="flexRadioDefault1">
                            Categoría 1
                        </label>
                    </div>
                    <div className="form-check">
                        <Link to='/categorias/cookies' key='cookies'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </Link>
                        <label className="form-check-label labelProducts" htmlFor="flexRadioDefault1">
                            Categoría 2
                        </label>
                    </div>
                    <div className="form-check">
                        <Link to='/categorias/cupcakes' key='cupcakes'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        </Link>
                        <label className="form-check-label labelProducts" htmlFor="flexRadioDefault1">
                            Categoría 3
                        </label>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
                    <button className='btn btnProd1 text-dark fw-bold'>Filtrar</button>
                    <Link to='/productos'>
                        <button className='btn btnProd2 text-dark fw-bold'>Resetar filtro</button>
                    </Link>
                </div>
            </div>
            <div className="divProducts2 d-flex flex-wrap mt-4 justify-content-center col-sm-6 col-md-7 col-lg-8">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default ProductsContainer