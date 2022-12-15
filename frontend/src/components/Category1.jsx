import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const Category1 = () => {
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
        <>
        <div className="container mt-4">
            <div className="divCategory1">
                <h1>Categoría 1</h1>
            </div>
            <div className="divCategory2 d-flex flex-wrap mt-4 justify-content-center">
                <ItemList data={data} />
            </div>
        </div>
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
            <div className="divCategory1 divText">
                <h1>Nuestras redes</h1>
            </div>
            <div className="divCategory2a d-flex flex-wrap mt-4 justify-content-center">
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <a className='linkIGFB d-flex justify-content-center flex-column align-items-center' target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tortasbibiymas">
                        <img src="https://i.ibb.co/j6xJPTf/instagram.png" alt="instagram" className="imgRedes" />
                        <p>Ir a Instagram</p>
                    </a>
                </div>
                <div className="d-flex justify-content-center flex-column align-items-center">
                    <a className='linkIGFB d-flex justify-content-center flex-column align-items-center' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tortasbibiymas">
                    <img src="https://i.ibb.co/bRXHbjW/facebook.png" alt="facebook" className="imgRedes" />
                    <p>Ir a Facebook</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Category1