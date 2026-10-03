import React from 'react';
import appwriteService from '../appwrite/mainConfig';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-800 rounded-xl p-4 h-full border border-gray-700 hover:border-indigo-500 transition-all duration-200'>
                <div className='w-full justify-center mb-4 h-48 overflow-hidden rounded-lg'>
                    <img 
                        src={appwriteService.getFilePreview(featuredImage)} 
                        alt={title}
                        className='w-full h-full object-cover' 
                    />
                </div>
                <h2 className='text-xl font-bold text-white line-clamp-2'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;