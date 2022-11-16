import { useState } from 'react'
import { BsFillPatchPlusFill, BsFillPatchMinusFill } from "react-icons/bs"

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(parseInt(initial))

    const remove = () => {
        setCount(count - 1)
    }

    const add = () => {
        setCount(count + 1)
    }

    return (
        <div className='divItemCount'>
            <button disabled={count <= 1} className='btnAddLess' onClick={remove}><BsFillPatchMinusFill /></button>
            <span className='spanItemCount'>{count}</span>
            <button disabled={count >= stock} className='btnAddLess' onClick={add}><BsFillPatchPlusFill /></button>
        </div>
    )
}

export default ItemCount