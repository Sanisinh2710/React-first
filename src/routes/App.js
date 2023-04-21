import '../style/App.css';
import '../style/post.css';
import Udata from '../Component/Udata';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const App = () => {

  const [users, setUsers] = useState([]);

  const fetchUser = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const udata = await res.json();
    setUsers(udata)
    console.log(udata);
  }

  useEffect(() => {
    fetchUser();
  }, [])
  return <>
  <div className="container">

  <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody >
        <Udata users={users} />
      </tbody>
     
      
    </table>

    <Link to={'/User-form'} className="button">Form</Link>
  </div>
  </>
}


export default App;
