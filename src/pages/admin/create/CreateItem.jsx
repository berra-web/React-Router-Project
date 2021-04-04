import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import CreateForm from './CreateForm';


export default function CreateItem() {
    const [post, setPost] = useState({});
    const history = useHistory();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPost({
            ...post,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/products/', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post) 
            });
            
            history.push('/')
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1 className="m-4">Create</h1>
            <CreateForm 
            post={post}
            handleChange={handleChange}
            handleSubmit={handleSubmit}/>
        </div>
    )
}
