import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Work, WorkProps } from './Work';

export const WorksList = () => {
    const [posts, setPosts] = useState<WorkProps[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('https://blog-test-dev.microcms.io/api/v1/works', {
                headers: {
                    'X-MICROCMS-API-KEY': '2YBb9n1AIKYI0Ltk2AzmPh0bZtPRDkkCG1d1'
                }
            });
            setPosts(res.data.contents);
        };

        fetchPosts();
    }, []);

    return (
        <>
            {posts.map(post => (
                <Work title={post.title} subtitle={post.subtitle} body={post.body} image={post.image} link={post.link} />
            ))}
        </>
    );
}