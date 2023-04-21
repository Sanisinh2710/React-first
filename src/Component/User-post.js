import '../style/post.css';
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Post = () => {
    const location = useLocation()
    const id = location.state;

    const [post, setPosts] = useState([]);
    const [visible, setVisible] = useState(5);
    const [come, setCom] = useState([]);
    const [showCom, setshowCom]  = useState(false);

    const fetchPosts = async () => {

        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const posts = await res.json();
        setPosts(posts)

    }

    const loadMore = async () => {
        setVisible(prevValue => prevValue + 5)
    }


    const fetchComm = async (id) => {
        if (showCom) {
            setCom([]);
            setshowCom(false);
        }
        else{
            const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            const udata = await res.json();
            
            setshowCom(true);
            setCom(udata)
            for (let i = 0; i < post.length; i++) {
                if (post[i].id === id) {
                    post[i].come = udata
                }
            }
        }
        

    }




    useEffect(() => {
        fetchPosts();
    }, []);


    useEffect(() => {
        fetchComm();
    }, []);

    return (
        <>
            <div className='container'>
                {
                    post.slice(0, visible).map((upost) => (

                        <div className="card" key={upost.id}>
                            <div className="title">{upost.title}</div>
                            <div className="body">{upost.body}</div>

                            <div className="butCom" onClick={() => fetchComm(upost.id)}>View-comments</div>
                            {
                                come.map((c) => {

                                    return (<>

                                        {
                                           
                                            (upost.id === c.postId ? <><div className="comments" key={c.id}>
                                                <p>Name: {c.name}</p>
                                                <p>Email: {c.email}</p>
                                                <p>Comment: {c.body}</p>
                                            </div></> : null)
                                        }
                                    </>)
                                })
                            }
                        </div>

                    )
                    )}
                <div className="bottom">
                    <button className="loadmore" onClick={loadMore}>More Posts</button>
                    <Link className="back" to={'/'}>back</Link>
                </div>
            </div>
        </>
    )

}

export default Post;    