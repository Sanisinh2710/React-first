import '../style/post.css';
import { Link } from "react-router-dom";
import FetchComments from '../Component/comment'

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Post = () => {
    const location = useLocation()
    const id = location.state;

    const [post, setPosts] = useState([]);
    const [visible, setVisible] = useState(5);
   

    const fetchPosts = async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const posts = await res.json();
        setPosts(posts)

    }

    const loadMore = async () => {
        setVisible(prevValue => prevValue + 5)
    }


    useEffect(() => {
        fetchPosts();
        
    }, []);


   
    return (
        <>
            <div className='container'>
                {
                    post.slice(0, visible).map((upost) => (

                        <div className="card" key={upost.id}>
                            <div className="title">{upost.title}</div>
                            <div className="body">{upost.body}</div>

                            <FetchComments id={upost.id}/>
                        </div>

                    )
                    )}
                <div className="bottom">
                    <button className="button" onClick={loadMore}>More Posts</button>
                    <Link className="back" to={'/'}>back</Link>
                </div>
            </div>
        </>
    )

}

export default Post;    