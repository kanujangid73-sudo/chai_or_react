import React, { useState, useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
            setLoading(false)
        })
    }, [])

    if (loading) {
        return (
            <div className="w-full py-8 text-center">
                <Container>
                    <h1 className="text-2xl font-bold">Loading Posts...</h1>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                {posts.length === 0 ? (
                    <div className="text-center py-8">
                        <h1 className="text-2xl font-bold text-gray-600">No posts found. Add a new post!</h1>
                    </div>
                ) : (
                    <div className='flex flex-wrap -mx-2'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    )
}

export default AllPosts