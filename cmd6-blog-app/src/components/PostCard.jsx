import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 transition-all duration-200 hover:shadow-lg hover:scale-[1.02]'>
                <div className='w-full justify-center mb-4 h-48 overflow-hidden rounded-xl'>
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className='rounded-xl object-cover w-full h-full'
                    />
                </div>
                <h2 className='text-xl font-bold text-gray-800 line-clamp-2'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard