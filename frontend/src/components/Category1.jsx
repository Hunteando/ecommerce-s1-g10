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
        <div className="container mt-4">
            <div className="divCategory1">
                <h1>Categoría 2</h1>
            </div>
            <div className="divCategory2 d-flex flex-wrap mt-4 justify-content-center">
                <ItemList data={data} />
            </div>
        </div>
        </>
    )
}

export default Category1