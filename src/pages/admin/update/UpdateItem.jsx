import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import UpdateForm from './UpdateForm';


export default function UpdateItem({match}) {
    const [post, setPost] = useState({});
    const history = useHistory();
    console.log(history);



    useEffect(() => {
        async function fetchUpdatePost(){
            const response = await fetch('http://localhost:5000/products/' + match.params.id);
            if(!response.ok){
                throw new Error ('HTTP Error ! status' + response.status);
            }
            const data = await response.json();
            setPost(data)
        }
        fetchUpdatePost()
    }, [match.params.id]);


    const submitPost = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/products/' + post['_id'], {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        history.push('/manage-post')
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPost({
            ...post,
            [name] : value
        })
    }




    return (
        <div>
            <h1>Update</h1>
                <div> 
                    <UpdateForm
                    post={post}
                    submitPost={submitPost}
                    handleChange={handleChange}/>
                </div>
        </div>
    )
}
