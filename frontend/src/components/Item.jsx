import { Link } from 'react-router-dom'

const Item = ({ info }) => {
    const { _id: id, image: imagen, name: nombre, price: precio } = info
    return (
        <div className="card border-0" key={id}>
            <img src={imagen} className="card-img-top" alt="imagen-producto" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">${precio}</p>
                <Link to={`/item/${id}`}>
                    <span className="btn bgButton">Ver más</span>
                </Link>
            </div>
        </div>
    )
}

export default Item