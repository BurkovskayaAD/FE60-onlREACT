import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function PostPage() {

    const [post, setPost]: [post: any, setPost: any] = useState(null);

    // console.log(useParams());
    const {id} = useParams();
    console.log(id);

    const nav = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    },[])


    return ( 
        <>
        <div>POST PAGE</div>
        <div>{post === null ? null : <div>{post.body}</div>}</div>

        <button onClick={() => nav("/posts")}>Go Back</button>
        </>
     );
}

export default PostPage;