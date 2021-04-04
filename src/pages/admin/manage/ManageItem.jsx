import React, {useState, useEffect} from 'react';
import Item from './Item';

export default function ManageItem() {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
       
        fetchPosts()
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/products/');
            if(!response.ok){
                throw new Error('HTTP Error' + response.status);
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deletePost = async (postId) => {
        try {
            await fetch('http://localhost:5000/products/' + postId, {
            method: 'DELETE'
        });
        } catch (error) {
            console.log(error);
        }
        fetchPosts()
    }


    return (
      
        <div className="container">
            <h1 className="m-4">All Items</h1>
            {
            posts && posts.map(item => {
            return <Item
            key={item['_id']} 
            post={item}
            deletePost={deletePost}
            />
          })
        }
        </div>
       
    )
}
