const Item = ({ info }) => {
    const { id, imagen, nombre, precio } = info
    return (
        <div className="card border-0" key={id}>
            <img src={imagen} className="card-img-top" alt="imagen-producto" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">{precio}</p>
                <a href="#" className="btn bgButton">Ver más</a>
            </div>
        </div>
    )
}

export default Item