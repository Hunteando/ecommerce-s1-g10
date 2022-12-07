import { FaTrashAlt } from "react-icons/fa"

const AdminPanelProducts = ({ id, nombre, handleDelete }) => {

    return (
        <tr key={id}>
            <td>{nombre}</td>
            <td>
                <button className="btnDeleteProd" onClick={() => { handleDelete(id) } }>
                    <FaTrashAlt className="faColorTrash" />
                </button>
            </td>
        </tr>
    )
}

export default AdminPanelProducts