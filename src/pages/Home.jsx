import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";

export default function Home() {
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
  


    return (
        <div className="container">
            {posts.map(item => {
                 let postDate = new Date(item.date)
                return (
                    <motion.div initial={{ opacity: 0 }}animate={{ opacity: 1.5}} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} key={item['_id']}>
                        <div className="card mt-4" >
                            <div className="card-body">
                                <h4 className="card-title">{item.title}</h4>
                                <div className="card-text mb-2">{item.description}</div>
                                <h6 className="card-price text-center">Price :{item.price}$</h6>
                                <p className="card-price text-center">Stock :<strong>{item.stock}</strong></p>
                                <p> Category :{item.category}</p>
                                <div className="card-subtitle text-muted mb-2">Created At: {`${postDate.getFullYear()}-${postDate.getMonth()}-${postDate.getDate()}`}</div>
                                <Link to={`/item-page/${item['_id']}`} >Read More...</Link>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
