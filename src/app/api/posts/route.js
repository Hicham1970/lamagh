import { NextResponse } from 'next/server';
import connect from "@/utils/db";
import Post from "@/models/post/post-model";


// http://localhost:3000/api/posts

export const GET = async (req) => { 

    const url = new URL(req.url);
    const username = url.searchParams.get("username");

    //fetch
    try {
        await connect()

        let posts = await Post.find(username &&{username});
        console.log(posts); 
        return new NextResponse(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new NextResponse("Failed to fetch posts", { status: 500 });
    }
}

// to send posts to the server

export const POST = async (req) => {

    const body = await req.json();
    console.log(body);
    const newPost = new Post(body);
    //fetch
    try {
        await connect()
        await newPost.save();
        return new NextResponse("Post has been created", { status: 201 });
    } catch (error) {
        console.error("Error creating post:", error);
        return new NextResponse("Failed to create post", { status: 500 });
    }
}