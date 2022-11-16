import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import productos from "../mocks/fakeapi"

const ProductsContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            resolve(productos)
        })
        getData.then(res => setData(res))
    }, [])
    return (
        <div className="container mt-4 divMainProducts">
            <div className="divProducts1 col-sm-6 col-md-5 col-lg-4">
                <p className='pProducts'>Filtrar por:</p>
                <div className='divFilter'>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label labelProducts" for="flexRadioDefault1">
                            Categoría 1
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label labelProducts" for="flexRadioDefault1">
                            Categoría 2
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label labelProducts" for="flexRadioDefault1">
                            Categoría 3
                        </label>
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-3 mt-3'>
                    <button className='btn btnProd1 text-dark fw-bold'>Filtrar</button>
                    <button className='btn btnProd2 text-dark fw-bold'>Resetar filtro</button>
                </div>
            </div>
            <div className="divProducts2 d-flex flex-wrap mt-4 justify-content-center col-sm-6 col-md-7 col-lg-8">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default ProductsContainer