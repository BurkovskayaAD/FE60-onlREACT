import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPostsPage() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    })

    return ( 
        <div>{posts.length === 0 ? null : <>{posts.map((item: any) => (<Link key={item.id} to={`/posts/${item.id}`}>{item.title}</Link>))}</>}</div>
     );
}

export default AllPostsPage;