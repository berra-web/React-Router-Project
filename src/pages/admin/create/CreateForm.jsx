import React from 'react';
import {Link} from 'react-router-dom';

export default function CreateForm({post, handleSubmit, handleChange}) {

    return (
        <form onSubmit={handleSubmit}  >
            <div className="container">
                <div className='create-form mb-6'>
                    <label>Title :</label>
                    <textarea name='title'  value={post.title}  onChange={handleChange} cols="30" rows="2" className="form-control mb-2"></textarea>
                    <label>Description :</label>
                    <textarea name='description'  value={post.description}  onChange={handleChange} cols="30" rows="10" className="form-control mb-2"></textarea>
                    <label>Price :</label>
                    <textarea name='price' value={post.price} onChange={handleChange}  cols="30" rows="2" className="form-control mb-2"></textarea>
                    <label>Stock :</label>
                    <textarea name='stock'  value={post.stock}  onChange={handleChange} cols="30" rows="2" className="form-control mb-2"></textarea>
                    <label>Category :</label>
                    <textarea name='category'  value={post.category}  onChange={handleChange} cols="30" rows="2" className="form-control mb-2"></textarea>
                </div>
                    <button className="btn btn-success btn-sm  m-2">Create</button>
                    <Link to='/'><button className="btn btn-outline-secondary btn-sm  m-2">&larr; Back</button></Link>
            </div>
        </form>
    )
}
