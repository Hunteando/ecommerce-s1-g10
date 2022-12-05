import { FaRegEdit } from "react-icons/fa"
import { FaTrashAlt } from "react-icons/fa"

const AdminPanelProducts = ({ id, nombre, handleDelete, getProductsById }) => {

    return (
        <tr key={id}>
            <td>{nombre}</td>
            <td>
                <button className="btnDeleteProd" onClick={() => { getProductsById(id) } }>
                    <FaRegEdit className="faColorEdit" />
                </button>
                <button className="btnDeleteProd" onClick={() => { handleDelete(id) } }>
                    <FaTrashAlt className="faColorTrash" />
                </button>
            </td>
        </tr>
    )
}

export default AdminPanelProducts