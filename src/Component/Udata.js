import { Link } from "react-router-dom";


const Udata = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name, email} = curUser;
                    const {street,suite, city, zipcode} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street},{suite},{city},{zipcode}</td>
                            <td><Link to={'/User-post'} state={id}>View-Post</Link></td>
                        </tr>
                    )
                })

            }
        </>
    )
}
export default Udata;