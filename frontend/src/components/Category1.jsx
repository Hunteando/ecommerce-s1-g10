import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import productos from "../mocks/fakeapi"

const Category1 = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = new Promise(resolve => {
            resolve(productos)
        })
        getData.then(res => setData(res))
    }, [])
        
    return (
        <div className="container mt-4">
            <div className="divCategory1">
                <h1>Categoría 1</h1>
            </div>
            <div className="divCategory2 d-flex flex-wrap mt-4 justify-content-center">
                <ItemList data={data} />
            </div>
        </div>
    )
}

export default Category1