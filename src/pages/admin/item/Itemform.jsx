import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

export default function Itemform({post, dogImage}) {
    const postDate = new Date(post.date)
    return (
        <div className="container">
               <div className="text-center">
                   <motion.div animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}>
                       {dogImage && <img src={dogImage} alt="..." ></img>}
                   </motion.div>
               </div> 
            <div className="card-body" >
                <div className="card m-4">
                    <h4 className="card-title m-4">{post.title}</h4>
                    <div className="card-text mb-4">{post.description}</div>
                    <h6 className="card-price text-center">Price :{post.price}$</h6>
                    <p className="card-price text-center">Stock :<strong>{post.stock}</strong></p>
                    <p>Category : {post.category}</p>
                    <div className="card-subtitle text-muted mb-2">Created At: {`${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}`}</div>
                    <Link to='/' >&larr; Back</Link>
                </div>
            </div>
        </div>
    )
}
