import React, { cache } from 'react'
export default async function BlogPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {}
    )
    const posts: any = await res.json()

    return (
        <div><h1>
            Blog posts</h1>
            {
                 posts?.map((post: any) => (
                    <p key={post.id}>{post.title}</p>
                ))
            }</div>
    )
}

