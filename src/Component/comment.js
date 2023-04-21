import { useState } from "react";
const  FetchComments = ({id})=> {



    
    const [come, setCom] = useState([]);
    const [showCom, setshowCom] = useState(false);
    
    const getComment = async (id) => {
        console.log(id)
        const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        const udata = await res.json();

        if (showCom) {
            setshowCom(false);
            setCom([]);
        }
        else {

            setshowCom(true);
            setCom(udata)
        }


    }



    return (
        <>

            <div className="butCom" onClick={() => getComment(id)}>View-comments</div>
            {
                come.map((c) => {

                    return (
                    <>
                         <div className="comments" key={c.id}>
                                    <p>Name: {c.name}</p>
                                    <p>Email: {c.email}</p>
                                    <p>Comment: {c.body}</p>
                                </div>
                           
                        
                    </>)
                })
            }
        </>
    )
}

export default FetchComments ;