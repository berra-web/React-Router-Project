import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom";
import Itemform from './Itemform';


export default function ItemPages({match}) {
    const [post, setPost] = useState({});
    const [dogImage, setDogImage] = useState(null);

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


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setDogImage(data.message))
      },[])


    return (
        <div>
            <h1 className="m-4">BIG ITEM TEXT</h1>
            <div> 
                    <Itemform
                    post={post}
                    dogImage={dogImage}
                    />
                </div>
        </div>
    )
}
