import { useState, useContext } from 'react'
import { createContext } from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    /* Vaciar Carrito */
    const clear = () => setCart([])

    /* Verificar si esta en el carrito */
    const isInCart = (id) => cart.find(producto => producto.id === id) ? true : false

    /* Borrar producto del carrito */
    const removeItem = (id) => setCart(cart.filter(producto => producto.id !== id))

    /* Agregar producto al carrito */
    const addItem = (item, cantidad) => {
        let newCart
        let producto = cart.find(prod => prod.id === item.id)
        if (producto) {
            producto.cantidad += cantidad
            newCart = [...cart]
        } else {
            producto = { ...item, cantidad: cantidad }
            newCart = [...cart, producto]
        }
        setCart(newCart)
    }

    /* Suma Total del carrito */
    const totalPay = () => cart.reduce((acc, currentP) => acc + currentP.cantidad * currentP.precio, 0)

    /* Cant total de productos */
    const totalItems = () => cart.reduce((acc, ActualProd) => acc + ActualProd.cantidad, 0)

    return (
        <CartContext.Provider value={{
            clear, isInCart, removeItem, addItem, totalPay, totalItems, cart
        }}>
            {children} {/* Llamo a todos los hijos que envie */}
        </CartContext.Provider>
    )
}

export default CartProvider