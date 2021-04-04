import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function Item({post, deletePost}) {
    let postDate = new Date(post.date)
    return (
        <motion.div initial={{ opacity: 0 }}animate={{ opacity: 1.5}} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} >
            <div className="container">
                <div className="card mt-4">
                    <div className="card-body">
                        <h4 className="card-title m-4">{post.title}</h4>
                        <div className="card-text mb-4">{post.description}</div>
                        <h6 className="card-price text-center">Price :{post.price}$</h6>
                        <p className="card-price text-center">Stock :<strong>{post.stock}</strong></p>
                        <p>Category : {post.category}</p>
                        <div className="card-subtitle text-muted mb-2">Created At: {`${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}`}</div>
                        <button className="btn btn-danger btn-sm m-2" onClick={(e) => deletePost(post['_id'])}>Delete</button>
                        <Link to={`/update-post/${post['_id']}`}><button className="btn btn-primary btn-sm m-2">Update</button></Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
