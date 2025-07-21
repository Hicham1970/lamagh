import { fetch } from 'next/dist/compiled/@edge-runtime-primitives/fetch';

export const getPosts = async (username) => {
    const res = await fetch(`http://localhost:3000/api/posts?username=${username}`);
    const data = await res.json();


    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
 

    return data;
};