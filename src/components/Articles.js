import React, { useState } from 'react'
import ArticleBlog from './ArticleBlog';
import { Blogs } from './Data';

const Articles = () => {

    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState(null);

    setTimeout(() => {
        setIsPending(false)
        setData(Blogs)
    }, 3000)

    return (
        <ArticleBlog title="Latest Articles" isPending={isPending} data={data} />
    )
}

export default Articles