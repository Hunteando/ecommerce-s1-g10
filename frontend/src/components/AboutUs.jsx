import imgPrueba from "../images/imagePrueba.png"

const AboutUs = () => {
    return (
        <main className="aboutUsDiv my-5 container">
            <div className="column1AboutUs">
                <img className="imgAboutUs" src={imgPrueba} alt="image-aboutUs" />
            </div>
            <div className="column2AboutUs">
                <h3>Nuestra historia</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis recusandae doloremque tempora ipsum repellendus nesciunt, quam  vel vitae assumenda ab dolore labore sint eveniet tenetur in, impedit est cupiditate. Placeat.
                </p>
            </div>
            <div className="column2AboutUs">
                <h3>Nuestra historia</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis recusandae doloremque tempora ipsum repellendus nesciunt, quam  vel vitae assumenda ab dolore labore sint eveniet tenetur in, impedit est cupiditate. Placeat.
                </p>
            </div>
            <div className="column1AboutUs">
                <img className="imgAboutUs" src={imgPrueba} alt="image-aboutUs" />
            </div>
            <div className="column1AboutUs">
                <img className="imgAboutUs" src={imgPrueba} alt="image-aboutUs" />
            </div>
            <div className="column2AboutUs">
                <h3>Nuestra historia</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis recusandae doloremque tempora ipsum repellendus nesciunt, quam  vel vitae assumenda ab dolore labore sint eveniet tenetur in, impedit est cupiditate. Placeat.
                </p>
            </div>
        </main>
    )
}

export default AboutUs